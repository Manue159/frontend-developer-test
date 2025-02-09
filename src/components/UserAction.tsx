import * as React from 'react';
import { useState } from 'react';
import { useNotify, useRefresh, useUnselectAll, useDataProvider, useListContext } from 'react-admin';
import { Button, Confirm } from 'react-admin';

const UserActions = () => {
  const { selectedIds } = useListContext(); // Récupérer les IDs sélectionnés
  const [open, setOpen] = useState(false);
  const notify = useNotify();
  const refresh = useRefresh();
  const unselectAll = useUnselectAll();
  const dataProvider = useDataProvider();

  const handleClick = () => setOpen(true);

  const handleConfirm = async () => {
    try {
      // Désactiver les utilisateurs sélectionnés
      await dataProvider.updateMany('users', {
        ids: selectedIds,
        data: { status: 'inactive' },
      });

      // Afficher une notification de succès
      notify('Users deactivated successfully', { type: 'success' });

      // Rafraîchir la liste
      refresh();

      // Désélectionner tous les utilisateurs
      unselectAll();
    } catch (error) {
      // Afficher une notification d'erreur
      notify('Error deactivating users', { type: 'error' });
    } finally {
      setOpen(false);
    }
  };

  const handleDialogClose = () => setOpen(false);

  return (
    <>
      <Button label="Deactivate" onClick={handleClick} />
      <Confirm
        isOpen={open}
        title="Deactivate Users"
        content="Are you sure you want to deactivate the selected users?"
        onConfirm={handleConfirm}
        onClose={handleDialogClose}
      />
    </>
  );
};

export default UserActions;
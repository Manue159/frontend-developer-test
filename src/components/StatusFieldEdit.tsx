import * as React from 'react';
import { useUpdate, useNotify, useRecordContext, useGetOne } from 'react-admin';
import { Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface StatusFieldEditProps {
  source: string; 
}

const StatusFieldEdit: React.FC<StatusFieldEditProps> = ({ source }) => {
  const record = useRecordContext();
  const notify = useNotify();
  const [update] = useUpdate();
  const { data: currentRecord } = useGetOne('posts', { id: record?.id });

  if (!record || !currentRecord) {
    return null; 
  }

  const handleChange = async (event: SelectChangeEvent) => {
    try {
      // Mettre à jour uniquement le champ "status" tout en conservant les autres champs
      await update('posts', {
        id: record.id,
        data: { ...currentRecord, [source]: event.target.value },
      });
      notify('Status updated successfully', { type: 'success' });
    } catch (error) {
      notify('Error updating status', { type: 'error' });
    }
  };

  return (
    <Select
      value={record[source]}
      onChange={handleChange}
      size="small"
      sx={{
        width: '100%',
        backgroundColor: record[source] === 'published' ? '#e8f5e9' : '#f5f5f5',
        borderRadius: '4px',
        '& .MuiSelect-select': {
          color: record[source] === 'published' ? '#2e7d32' : '#616161',
        },
      }}
    >
      <MenuItem value="published">Published</MenuItem>
      <MenuItem value="draft">Draft</MenuItem>
    </Select>
  );
};

export default StatusFieldEdit;
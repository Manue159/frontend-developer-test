import * as React from 'react';
import { List, Datagrid, TextField, EmailField, Edit, SimpleForm, TextInput, Create, useNotify, useRedirect } from 'react-admin';
import UserActions from './UserAction';

export const UserList: React.FC = (props) => (
  <List {...props} actions={<UserActions />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="status" />
    </Datagrid>
  </List>
);

export const UserEdit: React.FC = (props) => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify('User updated successfully');
    redirect('/users');
  };

  return (
    <Edit {...props} mutationOptions={{ onSuccess }}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput source="email" />
        <TextInput source="status" />
      </SimpleForm>
    </Edit>
  );
};

export const UserCreate: React.FC = (props) => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify('User created successfully');
    redirect('/users');
  };

  return (
    <Create {...props} mutationOptions={{ onSuccess }}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="email" />
        <TextInput source="status" />
      </SimpleForm>
    </Create>
  );
};
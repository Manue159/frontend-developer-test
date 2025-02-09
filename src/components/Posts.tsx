import * as React from 'react';
import { List, Datagrid, TextField, ReferenceField, DateField, ReferenceInput,  AutocompleteInput, Edit, DateInput, SimpleForm, TextInput, Create, Show, SimpleShowLayout, Filter, SelectInput } from 'react-admin';
import StatusFieldEdit from './StatusFieldEdit'; 

const PostFilter: React.FC = (props) => (
  <Filter {...props}>
    <SelectInput
      source="status"
      choices={[
        { id: 'published', name: 'Published' },
        { id: 'draft', name: 'Draft' },
      ]}
      alwaysOn
    />

    <ReferenceInput source="authorId" reference="users" alwaysOn>
      <AutocompleteInput optionText="name" label="Author" />
    </ReferenceInput>
  </Filter>
);

export const PostList: React.FC = (props) => (
  <List {...props} filters={<PostFilter />} perPage={4} >
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="title" sortable={true} />
      <ReferenceField source="authorId" reference="users" sortable={false}>
        <TextField source="name" />
      </ReferenceField>
      <DateField source="publishedDate" sortable={true} />
      <StatusFieldEdit source="status" />
    </Datagrid>
  </List>
);

export const PostEdit: React.FC = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
      <TextInput source="authorId" />
      <DateInput source="publishedDate" />
      <TextInput source="status" />
    </SimpleForm>
  </Edit>
);

export const PostCreate: React.FC = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="authorId" />
      <DateInput source="publishedDate" />
      <SelectInput source="status" 
      choices={[
        { id: 'draft', name: 'Draft' },
        { id: 'published', name: 'Published' },
    ]}/>
    </SimpleForm>
  </Create>
);

export const PostShow: React.FC = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <ReferenceField source="authorId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="publishedDate" />
      <TextField source="status" />
    </SimpleShowLayout>
  </Show>
);
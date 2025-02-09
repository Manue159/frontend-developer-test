import * as React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useGetList } from 'react-admin';
import Charts from './Charts';

const Dashboard = () => {
  const { total: totalUsers } = useGetList('users');
  const { total: totalPosts } = useGetList('posts');

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Dashboard</Typography>
        <Typography variant="body1">Total Users: {totalUsers}</Typography>
        <Typography variant="body1">Total Posts: {totalPosts}</Typography>
        <Charts />
      </CardContent>
    </Card>
  );
};

export default Dashboard;
import * as React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { useGetList } from 'react-admin';

const Charts = () => {
  const { data: users } = useGetList('users');
  const { data: posts } = useGetList('posts');

  // Données pour le graphique en barres (nombre de posts par utilisateur)
  const postsPerUser = users?.map((user) => ({
    name: user.name,
    posts: posts?.filter((post) => post.authorId === user.id).length || 0,
  }));

  // Données pour le graphique en camembert (répartition des posts)
  const postStatusData = [
    { name: 'Published', value: posts?.filter((post) => post.status === 'published').length || 0 },
    { name: 'Draft', value: posts?.filter((post) => post.status === 'draft').length || 0 },
  ];

  const COLORS = ['#0088FE', '#00C49F']; // Couleurs pour le camembert

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
      <div>
        <h3>Posts per User</h3>
        <BarChart width={500} height={300} data={postsPerUser}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="posts" fill="#8884d8" />
        </BarChart>
      </div>
      <div>
        <h3>Post Status Distribution</h3>
        <PieChart width={400} height={300}>
          <Pie
            data={postStatusData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {postStatusData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Charts;
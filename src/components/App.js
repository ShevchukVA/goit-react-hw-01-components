import React from 'react';
import Section from './Section';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './Friends/FriendList';
import TransactionHistory from './Transactions/Transactions';
import user from '../JSON/user.json';
import statisticalData from '../JSON/statistical-data.json';
import friends from '../JSON/friends.json';
import transactions from '../JSON/transactions.json';

export default function App() {
  return (
    <>
      <Section title="Task 1">
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section title="Task 2">
        <Statistics title="Upload stats" stats={statisticalData} />
      </Section>
      <Section title="Task 3">
        <FriendList friends={friends} />
      </Section>
      <Section title="Task 4">
        <TransactionHistory items={transactions} />
      </Section>
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { List, message, Avatar, Skeleton, Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { UserType } from '../../../types/user';
import { getAll } from '../../../api/user';

type Props = {
    data: UserType[];
}

const User = (props: Props) => {
    const [loading, setLoading] = useState(false);
  const [data, setData] = useState<UserType[]>([]);

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
   
  };

  useEffect(() => {
    const getData = async () =>{
        const {data} = await getAll();
        console.log(data);
        setData(data);
    }
    getData();
    loadMoreData();
  }, []);


  return (

         <div
      id="scrollableDiv"
      style={{
        height: 400,
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        loader={<Skeleton  paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={item => (
            <List.Item key={item.id}>
              <List.Item.Meta
              
                title={<a href="https://ant.design">{item.name}</a>}
                description={item.email}
              />
              <div>Content</div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
 

    </div>


  )
}

export default User
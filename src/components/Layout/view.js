import React from 'react'
import UserLayout from './User'
import Sidebar from '../Sidebar';
import Header from '../Header';
import Layouts from './Layout';

const View = (props) => {
    const layouts = {
        user: UserLayout,
        view: Layouts,
      }
      document.title = props.title;
    // let Layout = props.layout ? layouts[props.layout] : AppLayout;
      let Layout = layouts[props.layout]

      if (!props?.display)
      return false;
  
  return (
    <>
    {!props.page ?
      <main className='flex w-screen h-screen'>
        <Sidebar />
        <div className='dashboard-content ml-[250px] w-full'>
          <Header />
          <Layout title={ props.title } data={ props.data }>
            { props.display }
          </Layout>
        </div>
      </main>
      :
      <Layout title={ props.title } data={ props.data }>
            { props.display }
          </Layout>
    }
    </>
  )
}
export default View
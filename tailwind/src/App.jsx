import './App.css';

function App() {
  return (
    <main className='pt-12'>
      <h2 className='text-center text-5xl text-black font-semibold mb-5'>
        Live any where
      </h2>
      <h3 className='text-center text-2xl lg:text-[#e44a4a] mb-10'>
        Keep calm & travel on
      </h3>
      <div className='flex gap-5 max-w-5xl mx-auto'>
        <div className='product  w-1/3'>
          <div className='mb-5'>
            <img
              className='rounded-lg w-full h-full object-cover'
              src='https://images.unsplash.com/photo-1686907470279-ffb1f9f2a574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80'
              alt=''
            />
          </div>
          <h4 className='text-center text-gray-900 text-xl font-medium mb-2'>Enjoy the great cold</h4>
          <h5 className='text-center text-gray-500 text-base mb-4 font-normal'>6776 properties</h5>
        </div>
        <div className='product w-1/3'>
          <div className='mb-5'>
            <img
              className='rounded-lg'
              src='https://images.unsplash.com/photo-1686907470279-ffb1f9f2a574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80'
              alt=''
            />
          </div>
          <h4 className='text-center text-gray-900 text-xl font-medium mb-2'>Enjoy the great cold</h4>
          <h5 className='text-center text-gray-500 text-base mb-4 font-normal'>6776 properties</h5>
        </div>
        <div className='product w-1/3'>
          <div className='mb-5'>
            <img
              className='rounded-lg'
              src='https://images.unsplash.com/photo-1686907470279-ffb1f9f2a574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80'
              alt=''
            />
          </div>
          <h4 className='text-center text-gray-900 text-xl font-medium mb-2'>Enjoy the great cold</h4>
          <h5 className='text-center text-gray-500 text-base mb-4 font-normal'>6776 properties</h5>
        </div>
      </div>
      
    </main>
  );
}

export default App;

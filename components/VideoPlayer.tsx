const VideoPlayer = () => {
  return (
    <div className='relative md:w-[100%] m-auto'>
      <video
        controls
        controlsList='nodownload'
        className='videoPlayer top-0 left-0 w-full block'
      >
        <source src={"/video.mp4"} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='flex'>
        <div className='flex-[50%]'>
          <h1 className='text-3xl'>
            Money Heist S1:E1: Understanding the bank
          </h1>
          <p>
            <span className='font-semibold'>About - </span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt,
            quae quos cum ipsa accusantium possimus distinctio recusandae
            doloremque obcaecati dolor error! Rerum mollitia a nisi consectetur
            dolorem, consequuntur iste minus, saepe, odit deserunt cumque.
          </p>
        </div>
        <div className='flex-[50%]'>
          <h1 className='text-3xl'>
            Money Heist S1:E1: Understanding the bank
          </h1>
          <p>
            <span className='font-semibold'>About - </span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt,
            quae quos cum ipsa accusantium possimus distinctio recusandae
            doloremque obcaecati dolor error! Rerum mollitia a nisi consectetur
            dolorem, consequuntur iste minus, saepe, odit deserunt cumque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

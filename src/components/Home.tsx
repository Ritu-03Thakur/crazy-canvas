import ChooseCard from "./ChooseCard";


const Home = () => {
    const nameCards = [
        {
          id: "C1",
          img: "/soundboard/csb.jpeg",
          title: "Character SoundBoard",
          link: "/soundboard",
        },
      ];
    
      return (
        <>
        <div className='flex flex-col m-auto items-center '>
        <h1 className='text-4xl font-extrabold dark:text-col-v p-2 m-2'>CRAZY CANVAS</h1>
          {nameCards.map((card) => (
            <ChooseCard key={card.id} {...card} />
          ))}
        </div>
        </>
      );
}

export default Home

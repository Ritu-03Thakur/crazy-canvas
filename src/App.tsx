
import ChooseCard from './components/ChooseCard';



const App  = () => {
  const nameCards = [
    {
      id: "C1",
      img: "/csb.jpeg",
      title: "Character SoundBoard",
      link: "/",
    },
  ];

  return (
    <>
    <div className='flex flex-col m-auto items-center '>
    <h1 className='text-4xl font-extrabold dark:text-col-v'>CRAZY CANVAS</h1>
      {nameCards.map((card) => (
        <ChooseCard key={card.id} {...card} />
      ))}
    </div>
    </>
  );
};

export default App;

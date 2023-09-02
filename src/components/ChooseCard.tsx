

interface ChooseCardProps {
    link: string;
    img: string;
    title: string;
  }


  const ChooseCard: React.FC<ChooseCardProps> = ({ link, img, title }) => {
  return (
    <>
     
<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href={link}>
        <img className="p-8 rounded-t-lg" src={img} alt="card image" />
    </a>
    <div className="px-5 pb-5">  
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5> 
       
    </div>
</div>

    </>
  )
}

export default ChooseCard

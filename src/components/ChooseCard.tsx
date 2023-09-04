import {Link} from 'react-router-dom'

interface ChooseCardProps {
    link: string;
    img: string;
    title: string;
  }


  const ChooseCard: React.FC<ChooseCardProps> = ({ link, img, title }) => {
  return (
    
     
    <Link to={link}>
<div className="flex flex-col justify-center items-center p-1  boxshadow w-full max-w-sm  bg-col-o rounded-lg shadow ">
        <img className=" rounded-t-lg" src={img} alt="card image" />
    <div className="p-2">  
            <h5 className=" text-2xl uppercase   font-semibold tracking-tight text-col-b ">{title}</h5> 
       
    </div>
</div>
    </Link>

  
  )
}

export default ChooseCard

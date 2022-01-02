import './style.css';



type Props = {
    orientation: String
}
export const ButtonNext = ({orientation}:Props) => {

    const nameClass = (orientation:String) => {
        if(orientation === "left"){
            return `${orientation}`
        }else {
            return `${orientation}`
        }
    }

    const name = nameClass(orientation); 
   

    return(
        <div className={name}>
        
        </div>
    )
}
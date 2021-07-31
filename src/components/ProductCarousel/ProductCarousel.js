import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./ProductCarousel.css";
import { data } from '../../data';
import { ArrowBackIos, ArrowForwardIos, } from "@material-ui/icons";
import { Button } from '../../globalStyles'


const PreviousBtn=(props)=>{        
    const {className,onClick} = props;

    return(
        <div className={className} onClick={onClick}>
            <ArrowBackIos style={{color:'black'}}/>

        </div>
    )
}
const NextBtn=(props)=>{
    const {className,onClick} = props;

    return(
        <div className={className} onClick={onClick}>
            <ArrowForwardIos style={{color:'black'}}/>
        </div>
    )
}
const Card=(props)=>{
    const {item} = props;
    return(
    <div className="productCard">
        <img src={item} alt="pic" style={{width:"100%", height:"150px", objectFit:'contain'}}/>
        {/* <p style={{display:'flex',alignItems:'center'}}>name</p>
        <p style={{display:'flex',alignItems:'center'}}>description</p>
        <p style={{display:'flex',alignItems:'center'}}>price</p> */}
    </div>
    )
}


const ProductCarousel = () => {
    return (
        <>
        <div id='products'style={{ margin:"30px", }}>
            <h1 style={{justifyContent:"center", display:'flex',margin:'10px',paddingTop:'20px',paddingBottom:'30px',textDecoration:'underline', color:'#CD212A'}}>Best Seller</h1>
            <Slider 
            style={{marginTop:'10px',marginBottom:'10px'}}
            dots={true} 
            prevArrow={<PreviousBtn />}
            nextArrow={<NextBtn />}
            slidesToShow={3}
            >
                {
                    data.map ((item) => (

                    <Card item={item}/>
                ))}
            </Slider>
            <div style={{ margin:'30px',paddingTop:'15px', display:'flex', justifyContent:'center',alignItems:'center'}}>      
            <Button style={{margin:'15px'}}>Online Store Coming Soon!</Button>
            </div>  
        </div>
        </>
    );

   
}
    


export default ProductCarousel;
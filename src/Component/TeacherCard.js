import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Slider from "react-slick";
import * as React from "react";
import car from "../images/6-2-car-png-file-thumb.png";
import CardActions from '@mui/material/CardActions';
import CheckCircle from '@mui/icons-material/CheckCircle';
import { makeStyles } from '@mui/styles';


const useStyles=makeStyles({
    card:{
        borderRadius:'50px',
    textAlign:'center',
    },
    cardAction:{
        alignItems:'center',
        alignContent:'center'
    },
    checkCircle:{
        color:'green',
        fontSize:'100'
    }
});
export default function TeacherCard(){


    const classes = useStyles()
    const data = ["Nipun Lakshitha","Lakshitha Nipun","Lakal Ranuga","Ranuga Lakal","Sachin Gimhan","Gimhan Sachin"]
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        rtl: false,
        swipeToSlide: true,
        autoplaySpeed: 200,
        cssEase: 'linear',
    };

    const mainDiv={
        width:'100vw',
        height:'100vh',
        overflowX:'hidden',
        backgroundColor:'#00a8ff'
    }
    const divOfHeader={
        width: '100vw',
        height: '6vh',
        textAlign:'center',
        borderBottom:'1px solid white'
    }
    const header={
         fontFamily:'Bebas Neue,cursive,Oswald,sans-serif',
        color: 'white'
    }
    const WeekOneMainDiv={
        width:'100vw',
        height:'40vh',
        marginTop:'2vh'
    }
    const WeekTwoMainDiv={
        width:'100vw',
        height:'auto',
        marginTop:'120px'
    }
    const WeekThreeMainDiv={
        width:'100vw',
        height:'auto',
        marginTop:'120px'
    }
    const WeekForthMainDiv={
        width:'100vw',
        height:'auto',
        marginTop:'120px'
    }
    const WeekFifthMainDiv={
        width:'100vw',
        height:'auto',
        marginTop:'120px'
    }
    const weekOneDiv={
        width:'10vw',
        height:'maxHeight',
        backgroundColor: 'white',
        borderRadius:'18px'
    }
    const weekTwoDiv={
        width:'10vw',
        height:'maxHeight',
        backgroundColor: 'white',
        borderRadius:'18px'
    }
    const weekThreeDiv={
        width:'10vw',
        height:'maxHeight',
        backgroundColor: 'white',
        borderRadius:'18px'
    }
    const weekForthDiv={
        width:'10vw',
        height:'maxHeight',
        backgroundColor: 'white',
        borderRadius:'18px'
    }
    const weekFifthDiv={
        width:'10vw',
        height:'maxHeight',
        backgroundColor: 'white',
        borderRadius:'18px'
    }
    const weekOneH={
        paddingLeft:'2vw',
        fontFamily: 'Bebas Neue,cursive'
    }
    const weekTwoH={
        paddingLeft:'2vw',
        fontFamily: 'Bebas Neue,cursive'
    }
    const weekThreeH={
        paddingLeft:'2vw',
        fontFamily: 'Bebas Neue,cursive'
    }
    const weekForthH={
        paddingLeft:'2vw',
        fontFamily: 'Bebas Neue,cursive'
    }
    const weekFifthH={
        paddingLeft:'2vw',
        fontFamily: 'Bebas Neue,cursive'
    }

    return(
        <div style={mainDiv}>
            <div style={divOfHeader}>
                <h1 style={header}>Weekly Note Submitted Teachers</h1>
            </div>
            <div style={WeekOneMainDiv}>
                <div style={weekOneDiv}>
                    <h1 style={weekOneH}>WEEK ONE</h1>
                </div>
                <div>
                    <Slider {...settings}>
                        {
                            data.map((v) =>(
                                <div>
                                    <Card sx={{ maxWidth: 345 }} className={classes.card} style={{borderRadius:20}}>
                                        <CardMedia
                                            component="img"
                                            height="194"
                                            image={car}
                                            alt="Paella dish"
                                        />
                                        <CardContent className={classes.card}>
                                            <Typography variant="body3" color="#34495e" alignItems="center" fontSize="60" fontWeight="bold" textAlign="center" fontFamily="Bebas Neue,cursive,Oswald,sans-serif">
                                                Submitted Teacher :- {v}
                                            </Typography>
                                        </CardContent>
                                        <CardActions className={classes.cardAction}>
                                            <CheckCircle className={classes.checkCircle} style={{fontSize:40}}/>
                                        </CardActions>
                                    </Card>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
            <div style={WeekTwoMainDiv}>
                <div style={weekTwoDiv}>
                    <h1 style={weekTwoH}>WEEK TWO</h1>
                </div>
                <div>
                    <Slider {...settings}>
                        {
                            data.map((v) =>(
                                <div>
                                    <Card sx={{ maxWidth: 345 }} className={classes.card} style={{borderRadius:20}}>
                                        <CardMedia
                                            component="img"
                                            height="194"
                                            image={car}
                                            alt="Paella dish"
                                        />
                                        <CardContent className={classes.card}>
                                            <Typography variant="body3" color="#34495e" alignItems="center" fontSize="60" fontWeight="bold" textAlign="center" fontFamily="Bebas Neue,cursive,Oswald,sans-serif">
                                                Submitted Teacher :- {v}
                                            </Typography>
                                        </CardContent>
                                        <CardActions className={classes.cardAction}>
                                            <CheckCircle className={classes.checkCircle} style={{fontSize:40}}/>
                                        </CardActions>
                                    </Card>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
            <div style={WeekThreeMainDiv}>
                <div style={weekThreeDiv}>
                    <h1 style={weekThreeH}>WEEK THREE</h1>
                </div>
                <div>
                    <Slider {...settings}>
                        {
                            data.map((v) =>(
                                <div>
                                    <Card sx={{ maxWidth: 345 }} className={classes.card} style={{borderRadius:20}}>
                                        <CardMedia
                                            component="img"
                                            height="194"
                                            image={car}
                                            alt="Paella dish"
                                        />
                                        <CardContent className={classes.card}>
                                            <Typography variant="body3" color="#34495e" alignItems="center" fontSize="60" fontWeight="bold" textAlign="center" fontFamily="Bebas Neue,cursive,Oswald,sans-serif">
                                                Submitted Teacher :- {v}
                                            </Typography>
                                        </CardContent>
                                        <CardActions className={classes.cardAction}>
                                            <CheckCircle className={classes.checkCircle} style={{fontSize:40}}/>
                                        </CardActions>
                                    </Card>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
            <div style={WeekForthMainDiv}>
                <div style={weekForthDiv}>
                    <h1 style={weekForthH}>WEEK FORTH</h1>
                </div>
                <div>
                    <Slider {...settings}>
                        {
                            data.map((v) =>(
                                <div>
                                    <Card sx={{ maxWidth: 345 }} className={classes.card} style={{borderRadius:20}}>
                                        <CardMedia
                                            component="img"
                                            height="194"
                                            image={car}
                                            alt="Paella dish"
                                        />
                                        <CardContent className={classes.card}>
                                            <Typography variant="body3" color="#34495e" alignItems="center" fontSize="60" fontWeight="bold" textAlign="center" fontFamily="Bebas Neue,cursive,Oswald,sans-serif">
                                                Submitted Teacher :- {v}
                                            </Typography>
                                        </CardContent>
                                        <CardActions className={classes.cardAction}>
                                            <CheckCircle className={classes.checkCircle} style={{fontSize:40}}/>
                                        </CardActions>
                                    </Card>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
            <div style={WeekFifthMainDiv}>
                <div style={weekFifthDiv}>
                    <h1 style={weekFifthH}>WEEK FIFTH</h1>
                </div>
                <div>
                    <Slider {...settings}>
                        {
                            data.map((v) =>(
                                <div>
                                    <Card sx={{ maxWidth: 345 }} className={classes.card} style={{borderRadius:20}}>
                                        <CardMedia
                                            component="img"
                                            height="194"
                                            image={car}
                                            alt="Paella dish"
                                        />
                                        <CardContent className={classes.card}>
                                            <Typography variant="body3" color="#34495e" alignItems="center" fontSize="60" fontWeight="bold" textAlign="center" fontFamily="Bebas Neue,cursive,Oswald,sans-serif">
                                                Submitted Teacher :- {v}
                                            </Typography>
                                        </CardContent>
                                        <CardActions className={classes.cardAction}>
                                            <CheckCircle className={classes.checkCircle} style={{fontSize:40}}/>
                                        </CardActions>
                                    </Card>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
}

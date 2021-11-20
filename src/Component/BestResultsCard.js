import * as React from 'react';
import Slider from "react-slick";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import car from '../images/6-2-car-png-file-thumb.png';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyle=makeStyles({
    card:{
        textAlign:'center',
        fontSize:'20px',
        font:'Bebas Neue,cursive,Oswald,sans-serif,Ubuntu,sans-serif'
    },
})
export default function BestResultsCard() {
    const classes = useStyle()
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
    const divStyle={
        overflowX:'hidden'
    }
    const divOfGradeSix={
        width:'100vw',
        height:'20vh',
        textAlign:'center',
    }

    const hOfGradeSix={
        paddingTop: '2vh',
        fontWeight:'bold',
        color:'white',
        fontSize:'50',
        fontFamily:'Oswald,Sans-serif'
    }
    const divOfGradeSeven={
        width:'100vw',
        height:'20vh',
        textAlign:'center',
    }
    const hOfGradeSeven={
        paddingTop: '2vh',
        fontWeight:'bold',
        color:'white',
        fontSize:'50',
        fontFamily:'Oswald,Sans-serif'
    }
    const divOfGradeEight={
        width:'100vw',
        height:'20vh',
        textAlign:'center',
    }
    const hOfGradeEight={
        paddingTop: '2vh',
        fontWeight:'bold',
        color:'white',
        fontSize:'50',
        fontFamily:'Oswald,Sans-serif'
    }
    const divOfGradeNine={
        width:'100vw',
        height:'20vh',
        textAlign:'center',
    }
    const hOfGradeNine={
        paddingTop: '2vh',
        fontWeight:'bold',
        color:'white',
        fontSize:'50',
        fontFamily:'Oswald,Sans-serif'
    }
    const divOfGradeTen={
        width:'100vw',
        height:'20vh',
        textAlign:'center',
    }
    const hOfGradeTen={
        paddingTop: '2vh',
        fontWeight:'bold',
        color:'white',
        fontSize:'50',
        fontFamily:'Oswald,Sans-serif'
    }
    const divOfGradeEleven={
        width:'100vw',
        height:'20vh',
        textAlign:'center',
    }
    const hOfGradeEleven={
        paddingTop: '2vh',
        fontWeight:'bold',
        color:'white',
        fontSize:'50',
        fontFamily:'Oswald,Sans-serif'
    }
    const divOfGradeTwoWel={
        width:'100vw',
        height:'20vh',
        textAlign:'center',
    }
    const hOfGradeTwoWel={
        paddingTop: '2vh',
        fontWeight:'bold',
        color:'white',
        fontSize:'50',
        fontFamily:'Oswald,Sans-serif'
    }
    const divOfGradeThirTeen={
        width:'100vw',
        height:'20vh',
        textAlign:'center',
    }
    const hOfGradeThirTeen={
        paddingTop: '2vh',
        fontWeight:'bold',
        color:'white',
        fontSize:'50',
        fontFamily:'Oswald,Sans-serif'
    }
    const cardConetStyle={
        alignItems:'center',
        justifyContent:'center'
    }
    const grade6Line={
        marginTop:'5vh',
        width:'100vw',
        height:'5px',
        backgroundColor: 'white'
    }
    const mainDivOfGrade6={
        width:'100vw',
        height:'auto',
        backgroundColor:'#0984e3'
    }
    const mainDivOfGrade7={
        width:'100vw',
        height:'auto',
        backgroundColor:'#6c5ce7'
    }
    const mainDivOfGrade8={
        width:'100vw',
        height:'auto',
        backgroundColor:'#fd79a8'
    }
    const mainDivOfGrade9={
        width:'100vw',
        height:'auto',
        backgroundColor:'#d63031'
    }
    const mainDivOfGrade10={
        width:'100vw',
        height:'auto',
        backgroundColor:'#00b894'
    }
    const mainDivOfGrade11={
        width:'100vw',
        height:'auto',
        backgroundColor:'#81ecec'
    }
    const mainDivOfGrade12={
        width:'100vw',
        height:'auto',
        backgroundColor:'#74b9ff'
    }
    const mainDivOfGrade13={
        width:'100vw',
        height:'auto',
        backgroundColor:'#a29bfe'
    }


    return (
        <div style={divStyle}>
            <div style={mainDivOfGrade6}>
                <div style={divOfGradeSix}>
                    <h1 style={hOfGradeSix}>GRADE 6 BEST RESULTS</h1>
                </div>
                <Slider {...settings}>
                    {
                        data.map((v) => (
                            <div>
                                <Card sx={{ maxWidth: 345 }} className={classes.card} style={{borderRadius:15}}>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={car}
                                        alt="Paella dish"
                                    />
                                    <CardContent style={cardConetStyle}>
                                        <Typography variant="body3" color="black" alignItems="center" fontSize="70" fontFamily="Bebas-Neue,cursive,Oswald,sans-serif,Ubuntu,sans-serif">
                                           {v}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        ))
                    }
                </Slider>
                <div style={grade6Line}/>
            </div>
            <div style={mainDivOfGrade7}>
                <div style={divOfGradeSeven}>
                    <h1 style={hOfGradeSeven}>GRADE 7 BEST RESULTS</h1>
                </div>
                <Slider {...settings}>
                    {
                        data.map((v) => (
                            <div>
                                <Card sx={{ maxWidth: 345 }} className={classes.card} style={{borderRadius:15}}>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={car}
                                        alt="Paella dish"
                                    />
                                    <CardContent style={cardConetStyle}>
                                        <Typography variant="body3" color="black" alignItems="center" fontSize="70" fontFamily="Bebas-Neue,cursive,Oswald,sans-serif,Ubuntu,sans-serif">
                                            {v}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        ))
                    }
                </Slider>
                <div style={grade6Line}/>
            </div>
            <div style={mainDivOfGrade8}>
                <div style={divOfGradeEight}>
                    <h1 style={hOfGradeEight}>GRADE 8 BEST RESULTS</h1>
                </div>
                <Slider {...settings}>
                    {
                        data.map((v) => (
                            <div>
                                <Card sx={{ maxWidth: 345 }} className={classes.card} style={{borderRadius:15}}>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={car}
                                        alt="Paella dish"
                                    />
                                    <CardContent style={cardConetStyle}>
                                        <Typography variant="body3" color="black" alignItems="center" fontSize="70" fontFamily="Bebas-Neue,cursive,Oswald,sans-serif,Ubuntu,sans-serif">
                                            {v}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        ))
                    }
                </Slider>
                <div style={grade6Line}/>
            </div>
            <div style={mainDivOfGrade9}>
                <div style={divOfGradeNine}>
                    <h1 style={hOfGradeNine}>GRADE 9 BEST RESULTS</h1>
                </div>
                <Slider {...settings}>
                    {
                        data.map((v) => (
                            <div>
                                <Card sx={{ maxWidth: 345 }} className={classes.card} style={{borderRadius:15}}>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={car}
                                        alt="Paella dish"
                                    />
                                    <CardContent style={cardConetStyle}>
                                        <Typography variant="body3" color="black" alignItems="center" fontSize="70" fontFamily="Bebas-Neue,cursive,Oswald,sans-serif,Ubuntu,sans-serif">
                                            {v}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        ))
                    }
                </Slider>
                <div style={grade6Line}/>
            </div>
            <div style={mainDivOfGrade10}>
                <div style={divOfGradeTen}>
                    <h1 style={hOfGradeTen}>GRADE 10 BEST RESULTS</h1>
                </div>
                <Slider {...settings}>
                    {
                        data.map((v) => (
                            <div>
                                <Card sx={{ maxWidth: 345 }} className={classes.card} style={{borderRadius:15}}>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={car}
                                        alt="Paella dish"
                                    />
                                    <CardContent style={cardConetStyle}>
                                        <Typography variant="body3" color="black" alignItems="center" fontSize="70" fontFamily="Bebas-Neue,cursive,Oswald,sans-serif,Ubuntu,sans-serif">
                                            {v}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        ))
                    }
                </Slider>
                <div style={grade6Line}/>
            </div>
            <div style={mainDivOfGrade11}>
                <div style={divOfGradeEleven}>
                    <h1 style={hOfGradeEleven}>GRADE 11 BEST RESULTS</h1>
                </div>
                <Slider {...settings}>
                    {
                        data.map((v) => (
                            <div>
                                <Card sx={{ maxWidth: 345 }} className={classes.card} style={{borderRadius:15}}>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={car}
                                        alt="Paella dish"
                                    />
                                    <CardContent style={cardConetStyle}>
                                        <Typography variant="body3" color="black" alignItems="center" fontSize="70" fontFamily="Bebas-Neue,cursive,Oswald,sans-serif,Ubuntu,sans-serif">
                                            {v}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        ))
                    }
                </Slider>
                <div style={grade6Line}/>
            </div>
            <div style={mainDivOfGrade12}>
                <div style={divOfGradeTwoWel}>
                    <h1 style={hOfGradeTwoWel}>GRADE 12 BEST RESULTS</h1>
                </div>
                <Slider {...settings}>
                    {
                        data.map((v) => (
                            <div>
                                <Card sx={{ maxWidth: 345 }} className={classes.card} style={{borderRadius:15}}>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={car}
                                        alt="Paella dish"
                                    />
                                    <CardContent style={cardConetStyle}>
                                        <Typography variant="body3" color="black" alignItems="center" fontSize="70" fontFamily="Bebas-Neue,cursive,Oswald,sans-serif,Ubuntu,sans-serif">
                                            {v}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        ))
                    }
                </Slider>
                <div style={grade6Line}/>
            </div>
            <div style={mainDivOfGrade13}>
                <div style={divOfGradeThirTeen}>
                    <h1 style={hOfGradeThirTeen}>GRADE 13 BEST RESULTS</h1>
                </div>
                <Slider {...settings}>
                    {
                        data.map((v) => (
                            <div>
                                <Card sx={{ maxWidth: 345 }} className={classes.card} style={{borderRadius:15}}>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={car}
                                        alt="Paella dish"
                                    />
                                    <CardContent style={cardConetStyle}>
                                        <Typography variant="body3" color="black" alignItems="center" fontSize="70" fontFamily="Bebas-Neue,cursive,Oswald,sans-serif,Ubuntu,sans-serif">
                                            {v}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        ))
                    }
                </Slider>
                <div style={grade6Line}/>
            </div>
        </div>
    );
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ImagePiece1, TextBox, Text, ThreadContainer, ThreadBox } from '../assets/css/TrendingStyled'
import Sea1 from '../assets/photo/sea6424.jpg'
import Sea2 from '../assets/photo/sea6642.jpg'
import Sea3 from '../assets/photo/sea6669.jpg'

// class TrendingItems extends Component {
//      render() {
//           return (
//                <ThreadContainer>
//                <ThreadBox>
//                     <Link target={"_blank"} to="//pantip.com/topic/38834361" style={{ textDecoration: 'none' }}>
//                          <ImagePiece1 src={Sea1}/>
//                          <TextBox>
//                               <Text>[CR] Bali & Nusa Penida Island ทริปสุดคูลต้องไปสักครั้งที่บาหลีและเกาะนูซาเพนิดา</Text>
//                          </TextBox>
//                     </Link>
//                </ThreadBox>
//                <ThreadBox>
//                     <Link target={"_blank"} to="//pantip.com/topic/38838801" style={{ textDecoration: 'none' }}>
//                          <ImagePiece1 src={Sea2}/>
//                          <TextBox>
//                               <Text>[SR] Merit Resort Samui ที่พักเกาะสมุย ท่ามกลางวิวหลักล้าน</Text>
//                          </TextBox>
//                     </Link>
//                </ThreadBox>
//                <ThreadBox>
//                     <Link target={"_blank"} to="//pantip.com/topic/38838801" style={{ textDecoration: 'none' }}>
//                          <ImagePiece1 src={Sea3}/>
//                          <TextBox>
//                               <Text>[CR] "ไปเที่ยว ภูเก็ต-สิมิลัน 3 วัน 2 คืน กันเถอะ Go Go Go"</Text>
//                          </TextBox>
//                     </Link>
//                </ThreadBox>
//                </ThreadContainer>
//           )
//      }
// }

// export default TrendingItems;
// import Server from '../backend/Server'
import {
     Card,
     CardGroup,
     CardImg,
     CardBlock,
     CardTitle,
     CardSubtitle,
     CardText,
     Button,
   } from '../../node_modules/@bootstrap-styled/v4';

function TrendingItems () {
     const height = '310px';
     const width = '500px';
     return (
          <ThreadContainer>
          {/* <ThreadContainer ref={this.myRef}> */}
               <Card>
                    <CardImg height='310px' width='500px' src={Sea1} alt="Card image cap" />
                    <CardTitle>Card title</CardTitle>
                    <CardText>This is a wider card with supporting text below as a it longesdlncnjsndljcnsldnbcljsnbcljsndnlcnslncksdnclr.</CardText>
                    <Button>Button</Button>
               </Card>
               <Card>
                    <CardImg height='310px' width='500px' src={Sea2} alt="Card image cap" />
                    <CardTitle>Card title</CardTitle>
                    <CardText>This card has supporting text below as a .</CardText>
                    <Button>Button</Button>
               </Card>
               <Card>
                    <CardImg height='310px' width='500px' src={Sea3} alt="Card image cap" />
                    <CardTitle>Card title</CardTitle>
                    <CardText>This is a wider card with supporting text belontent than t.</CardText>
                    <Button>Button</Button>
               </Card>
               <Card>
                    <CardImg height='310px' width='500px' src={Sea3} alt="Card image cap" />
                    <CardTitle>Card title</CardTitle>
                    <CardText>This is a wider card with supporting text belontent than t.</CardText>
                    <Button>Button</Button>
               </Card>
               <Card>
                    <CardImg height='310px' width='500px' src={Sea3} alt="Card image cap" />
                    <CardTitle>Card title</CardTitle>
                    <CardText>This is a wider card with supporting text belontent than t.</CardText>
                    <Button>Button</Button>
               </Card>
          </ThreadContainer>
     )
}

export default TrendingItems;
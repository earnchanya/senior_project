import styled from 'styled-components'

const TrendingBox = styled.div`
     margin-top: 5vh;
`

const TitleBox = styled.div`
     margin-left: 2vw;
     display: flex;
     flex-direction: row;
     align-items: center;
`

const TrendIcon = styled.img`
     width: 35px;
     height: 35px;
`

const TrendTitle = styled.h1`
     color: #545081;
     font-size: 23px
`

const ButtonBox = styled.div`
     margin-left: 2vw;
     margin-top: 5px;
     display: grid | inline-grid;     
`

const FilterIcon = styled.img`
     width: 35px;
     height: 35px;
`

const ThemeButton = styled.button`
     width: 110px;
     height: 50px;
     margin-right: 10px;
     border-radius: 20px;
`

const ImagePiece1 = styled.img`
     display: block;
     opacity: 1;
     transition: .5s ease;
     backface-visibility: hidden;
     height: 310px;
     width: 500px;
`

const TextBox = styled.div`
     transition: .3s ease;
     opacity: 0;
     position: relative;
     ${'' /* position: absolute; */}
     left: 50%; 
     transform: translate(-50%, -50%);
     -ms-transform: translate(-50%, -50%);
     text-align: center;
     margin-bottom: 5px;
`

const Text = styled.div`
     background-color: none;
     color: black;
     font-family: 'Kanit', sans-serif;
     font-size: 20px;
     ${'' /* top: 50%; */}
     ${'' /* padding: 16px 32px; */}
}
`

const ThreadContainer = styled.div`
     ${'' /* background-color: #0E1318; */}
     width: 100vw;
     height: 300px;
     overflow-x: scroll;
     ${'' /* overflow-x: auto; */}

     display: grid;
     grid-template-columns: repeat(6, auto);
     grid-gap: 0 50px;

     padding: 30px 60px;
     padding-right: 0;  
     border-radius: 10px;

     margin-top: 2vh;
     margin-left: 2vw;
`

const ThreadBox = styled.div`
     padding: 0 7px;
     ${'' /* height: 300px;
     width: 500px; */}
     display: inline-block;
     ${'' /* width: 100%;
     position: relative;
     object-fit: cover; */}
     &:hover {
          ${ImagePiece1} {
                    cursor: pointer;
                    opacity: 0.3;
          }
          ${TextBox} {
                    cursor: pointer;
                    opacity: 1;  
          }
     }
`

export { TrendingBox, TitleBox, TrendIcon, TrendTitle, ButtonBox, FilterIcon, ThemeButton, 
     ImagePiece1, TextBox, Text,
     ThreadContainer, ThreadBox };
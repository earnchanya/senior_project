import styled from 'styled-components'

const TrendingBox = styled.div`
     ${'' /* margin-top: 5vh; */}
     ${'' /* position: relative; */}
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
     ${'' /* display: grid | inline-grid;      */}
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

export { TrendingBox, TitleBox, TrendIcon, TrendTitle, ButtonBox, FilterIcon, ThemeButton}
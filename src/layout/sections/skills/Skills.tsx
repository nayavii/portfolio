import { SectionTitle } from '../../../components/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
import styled from 'styled-components'
import { Skill } from './skill/Skill'

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>Skills</SectionTitle>
      <FlexWrapper wrap='wrap' justify='center' gap='60px 120px'>
        <Skill iconId='javascriptSvg' title='javascript'/>
        <Skill iconId='typescriptSvg' title='typescript'/>
        <Skill iconId='mongoSvg' title='mongo bd'/>
        <Skill iconId='postgresqlSvg' title='postgresql'/>
        <Skill iconId='jestSvg' title='jest'/>
        <Skill iconId='expressSvg' title='express'/>
        <Skill iconId='nestjsSvg' title='nest js'/>
        <Skill iconId='dockerSvg' title='dockerSvg'/>
        <Skill iconId='reactjsSvg' title='react js'/>
        <Skill iconId='reactnativeSvg' title='react native'/>
        <Skill iconId='styledcomponentSvg' title='styled component'/>
        <Skill iconId='reduxSvg' title='redux'/>
        <Skill iconId='gitSvg' title='git'/>



      </FlexWrapper>
    </StyledSkills>
  )
}

const StyledSkills = styled.section`
  background-color: #4a4545;

`

import { Button } from '@material-ui/core'
import React, { useRef, useState } from 'react'
import IsVisible from 'react-is-visible'
import { Fade } from 'react-reveal'
import { skills } from '../../data/skills.json'
import { useContainerDimensions } from '../../hooks'

const Skills = () => {
  const skillsWrapper = useRef()
  const { width } = useContainerDimensions(skillsWrapper)

  const [showAllSkills, setShowAllSkills] = useState(false) // State to manage showing all skills

  const handleToggleSkills = () => {
    setShowAllSkills((prevShowAllSkills) => {
      // Check if transitioning from showAllSkills to !showAllSkills
      if (prevShowAllSkills) {
        // Scroll to the top of the skills list
        skillsWrapper.current.scrollIntoView({ behavior: 'smooth' })
      }
      return !prevShowAllSkills
    })
  }
  return (
    <Fade duration={1000}>
      <div style={{ position: 'relative', width: '100%', maxWidth: 600 }}>
        <IsVisible once>
          {(isVisibleSkillsWrapper) => (
            <div
              className="skills-wrapper"
              style={
                isVisibleSkillsWrapper
                  ? {
                      transition: '1s opacity ease-in-out',
                      transform: `translateX(0)`,
                      opacity: 1,
                    }
                  : {}
              }
            >
              <h2>Skills</h2>
              <ul className="skills" ref={skillsWrapper}>
                {skills
                  .slice(0, showAllSkills ? skills.length : 10)
                  .map((skills) => {
                    return (
                      <li className="skill-bar-wrapper" key={skills.skillName}>
                        <div
                          className="skill-bar"
                          style={
                            isVisibleSkillsWrapper
                              ? {
                                  transition: `${
                                    1 + skills.id / 10
                                  }s width ease-in-out`,
                                  width: width * (skills.amount / 100),
                                }
                              : {
                                  width: 1,
                                }
                          }
                        ></div>
                        <div className="skill-name">{skills.skillName}</div>
                      </li>
                    )
                  })}
              </ul>

              <Button
                onClick={handleToggleSkills}
                type="button"
                variant="contained"
                style={{
                  marginTop: '10px',
                  marginBottom: '15px',
                }}
              >
                {showAllSkills ? 'Show Less' : 'Show All Skills'}
              </Button>
            </div>
          )}
        </IsVisible>
      </div>
    </Fade>
  )
}

export default Skills

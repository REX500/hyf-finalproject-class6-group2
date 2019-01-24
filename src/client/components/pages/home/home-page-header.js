import React from 'react'
import logBackground from './logo-bg.svg'
import Button from '@material-ui/core/es/Button/Button'
import TouchIcon from '@material-ui/icons/TouchApp'

const root = {
  textAlign: 'right',
  marginBottom: '-5rem'
}

const container = {
  minWidth: 275,
  maxWidth: 1200,
  width: '100%',
  height: 'auto',
  display: 'flex',
  margin: 'auto'
}

const left = {
  flex: 1,
  textAlign: 'left',
  display:'flex'
}
const leftContent = {
  margin:'auto'
}

const right = {
  flex: 1,
  display: 'flex',
  background: `url(${logBackground}) no-repeat center`,
  minHeight: '500px'
}

const mainTitle = {
  margin: 'auto',
  textAlign: 'center',
  color: '#585858',
  lineHeight: '38px',
  fontWeight: '100'
}
const copenhagen = {
  fontWeight: 'bold',
  color: '#1d5896'
}

const HomePageHeader = () => {
  return (
    <div style={root}>
      <div style={container}>
        <div style={left}>
          <div style={leftContent}>
            <h1 style={{ color: '#1d5896', fontWeight: 'bold' }}>
              HackYourFuture
            </h1>
            <p style={{ lineHeight: '2rem', color: '#555', fontWeight: '100'}}>
              HackYourFuture is an educational program that aims to train refugees
              and asylum seekers to become web-developers and empower them by
              opening the doors to a very in-demand job market.
            </p>
          </div>
        </div>
        <div style={right}>
          <h3 style={mainTitle}>
            REFUGEE CODE SCHOOL IN <br />
            <span style={copenhagen}>COPENHAGEN</span>
            <br />
            <Button
              style={{ marginTop: '1.5rem' }}
              size='large'
              variant='extendedFab'
              color='primary'
            >
              <TouchIcon />
              apply now
            </Button>
          </h3>
        </div>
      </div>
    </div>
  )
}

export default HomePageHeader

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Layout from './index'

const styles = theme => ({
  root: {
    width: '100%',
    minHeight: 'calc(100vh - 64px)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
  card: {
    minWidth: 275,
    maxWidth: 1200,
    width: '100%',
    height: 'auto',
    display: 'table',
    margin: '2rem auto 1rem',
    padding: '1rem 2rem',
    textAlign: 'justify',
    lineHeight: '1.9rem',

    boxSizing: 'border-box',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '0'
    }
  }
})

function Container(props) {
  const { classes, children, withLayout, style } = props

  return (
    <>
      {withLayout ? (
        <Layout>
          <Card className={classes.card}>{children}</Card>
        </Layout>
      ) : (
        <Card className={classes.card} style={style}>
          {children}
        </Card>
      )}
    </>
  )
}

Container.propTypes = {
  classes: PropTypes.object.isRequired,
  withLayout: PropTypes.bool
}

export default withStyles(styles)(Container)

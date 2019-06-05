import React, { Component } from 'react'

class StickyWrapper extends Component {
  state = {}

  handleScroll = () => {
    this.setState({ scroll: window.scrollY })
  }

  componentDidMount() {
    const el = document.querySelector('nav')
    this.setState({ top: el.offsetTop, height: el.offsetHeight })
    window.addEventListener('scroll', this.handleScroll)
  }

  componentDidUpdate() {
    this.state.scroll > this.state.top
      ? (document.body.style.paddingTop = `${this.state.height}px`)
      : (document.body.style.paddingTop = 0)
  }

  render() {
    const { links } = this.props
    return (
      <nav className="sticky-outer-wrapper">
        <div className="sticky-inner-wrapper">
          {/* <nav
        className={
          this.state.scroll > this.state.top
            ? 'sticky-outer-wrapper sticky-outer-wrapper-fixed-top'
            : 'sticky-outer-wrapper'
        }
      >
        <div
          className={
            this.state.scroll > this.state.top
              ? 'sticky-inner-wrapper sticky-inner-wrapper-fixed-top'
              : 'sticky-inner-wrapper'
          }
        >*/}

          <div className="link-list">
            <div className="filter-headertext">
              {links.map(link => (
                <span key={link}>
                  <span>{link}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default StickyWrapper

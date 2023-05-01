import React, { MouseEventHandler } from 'react';

const getOnclickScroller = (targetId: string) =>
  () => {
    document.getElementById(targetId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    })
  }

type SidebarItemProps = {
  label: string
  target: string
}
const SidebarItem = (props: SidebarItemProps) =>
  <a className='navlink' onClick={getOnclickScroller(props.target)}>
    {props.label}
  </a>

export default () => {
  return (
    <nav id="navigation-links">
      <SidebarItem target='bio' label="Short Bio" />
      <SidebarItem target='timeline' label="Timeline" />
      <SidebarItem target='skills' label="Skills" />
      <SidebarItem target='published_work' label="Published Work" />
    </nav>
  );
};

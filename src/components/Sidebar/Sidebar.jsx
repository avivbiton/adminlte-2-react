/* eslint-disable max-len */
import React from 'react';

import Item from './Item';
import Header from './Header';

const Sidebar = ({ children }) => (
  <aside className="main-sidebar">
    <section className="sidebar">
      {/* <div className="user-panel">
                  <div className="pull-left image">
                      <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User"></img>
                  </div>
                  <div className="pull-left info">
                      <p>Alexander Pierce</p>
                      <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                  </div>
              </div>
              <form action="#" method="get" className="sidebar-form">
                  <div className="input-group">
                      <input type="text" name="q" className="form-control" placeholder="Search..." />
                      <span className="input-group-btn">
                          <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                              <i className="fa fa-search"></i>
                          </button>
                      </span>
                  </div>
  </form> */}

      <ul className="sidebar-menu" data-widget="tree">
        {children}
      </ul>
    </section>
  </aside>
);

Sidebar.defaultProps = {
  children: null,
};

Sidebar.propTypes = {
  children(props, propName, componentName) {
    const prop = props[propName];
    let error;
    React.Children.forEach(prop, (el) => {
      if (error) return;
      if (el.type !== Item && el.type !== Header && el.type !== 'li') {
        error = new Error(
          `\`${componentName}\` only accepts \`Item's, Header's, and li's\`.`,
        );
      }
    });
    return error;
  },
};
export default Sidebar;
export { Item, Sidebar as Core, Header };

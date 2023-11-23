import * as React from 'react';

const Divider = ({ vertical = false }) => {
  if (vertical) {
    return (
      <div className="h-5/6 w-px bg-gradient-to-b from-slate-900 via-slate-600 to-slate-900"></div>
    );
  } else {
    return (
      <div className="w-11/12 h-px bg-gradient-to-r from-slate-900 via-slate-600 to-slate-900"></div>
    );
  }
};

export default Divider;

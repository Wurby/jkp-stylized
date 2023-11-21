import * as React from 'react';

const Divider = ({ vertical = true, horizontal = false }) => {
  if (vertical) {
    return (
      <div className="h-5/6 w-px bg-gradient-to-b from-slate-950 via-slate-600 to-slate-950"></div>
    );
  } else {
    return (
      <div className="w-5/6 h-px bg-gradient-to-r from-slate-950 via-slate-600 to-slate-950"></div>
    );
  }
};

export default Divider;

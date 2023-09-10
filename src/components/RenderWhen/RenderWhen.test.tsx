// import { render } from '@testing-library/react';
// import React from 'react';
// import { useSelector } from 'react-redux';

// import { RenderWhen } from './RenderWhen';

// jest.mock('react-redux');

// describe('RenderWhen component', () => {
//   const mockSelector = jest.fn();

//   beforeEach(() => {
//     (useSelector as jest.Mock).mockImplementation((selectorFn) =>
//       selectorFn({ foo: 'bar' })
//     );
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it('should render children when selector returns true', () => {
//     mockSelector.mockReturnValue(true);

//     const { getByText } = render(
//       <RenderWhen selector={mockSelector}>
//         <div>Child component</div>
//       </RenderWhen>
//     );

//     expect(getByText('Child component')).toBeInTheDocument();
//   });

//   it('should not render children when selector returns false', () => {
//     mockSelector.mockReturnValue(false);

//     const { queryByText } = render(
//       <RenderWhen selector={mockSelector}>
//         <div>Child component</div>
//       </RenderWhen>
//     );

//     expect(queryByText('Child component')).not.toBeInTheDocument();
//   });
// });

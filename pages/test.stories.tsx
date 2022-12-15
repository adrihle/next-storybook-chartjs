const TestComponent = () => (
  <div>Testing a component story</div>
);

const defaultStory = {
  component: TestComponent,
  title: 'TEST/TESTCOMPONENT',
};

export const TestStory = () => <TestComponent />;

export default defaultStory;

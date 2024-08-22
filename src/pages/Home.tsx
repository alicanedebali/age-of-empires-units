import { PageTitle } from '../components';

export const HomePage = () => {
  return (
    <div className="gap-y-4">
      <PageTitle title={'home page'} />

      <img src="/age-of-empires.jpg" alt="Age Of Empires" />
    </div>
  );
};

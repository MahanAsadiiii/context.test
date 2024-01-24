import './App.css';
import Header from './components/Header';
import { useUser } from './userContext';
import { useTheme } from './ThemeContext';

function App() {

  const { user } = useUser() 
  const dark = useTheme()
  console.log(dark);
  return (
      <div className="">
        <Header />
        <div className={`flex flex-col py-10 h-screen px-20 ${ dark ? 'bg-white' : "bg-gray-600 text-white"}`}>
          <div className="uppercase text-3xl font-bold text-center">blog app</div>
          <p className="text-xl mt-5 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vel quo iste corporis nihil voluptatem?
            Est fuga pariatur placeat adipisci earum esse temporibus dolores
            perspiciatis, corrupti accusantium tempore officiis dolorem nesciunt atque delectus eos,
            exercitationem ipsum alias in, sapiente porro ducimus explicabo itaque inventore. Nostrum iste quo tenetur dignissimos reiciendis.</p>
          <div className="mt-4 text-lg font-bold capitalize">thanks {user.name} </div>
          <div className=" text-lg font-bold">Date: {user.dob} </div>
        </div>
      </div>
  );
}

export default App;

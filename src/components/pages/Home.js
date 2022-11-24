import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdChevronLeft } from 'react-icons/md';
import { GoGear } from 'react-icons/go';
import { BiRightArrowCircle } from 'react-icons/bi';
import './Home.css';
import { getIndustryTitleStock } from '../redux/industry/industrySlice';

const Home = () => {
  const industryTitle = useSelector((state) => state.industryTitle);
  console.log(industryTitle);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIndustryTitleStock());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="content">
          <div className="search-bar">
            <MdChevronLeft />
            <input
              className="input-box"
              type="text"
              placeholder="2021 bershire hathway report"
            />
            <GoGear />
          </div>
          {industryTitle.map((item) => (
            <div key={item.performance} className="main-interface">
              <div className="date">
                <p>
                  {item.date}
                </p>
                {item.changeInWeight}
                <p>
                  change in weight
                </p>
                <BiRightArrowCircle />
              </div>
              <div className="all-stats">
                {item.weight}
                <p className="number">weight</p>
                {item.lastWeight}
                {item.changeInWeightPercentage}
                <p>% change</p>
              </div>
              <div className="performance">
                {item.performance}
                <p>performance</p>
                {item.lastPerformance}
                <p>last performance</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

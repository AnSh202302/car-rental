import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PaidIcon from "@mui/icons-material/Paid";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { BgImage, HomeItem, HomeList } from "./Home.styled";

const Home = () => {
  return (
    <BgImage>
      <div>
        <h1>
          Welcome to CarRental — Your reliable partner in car rental services
          across Ukraine!
        </h1>
        <HomeList>
          <HomeItem>
            <EventAvailableIcon />
            <div>
              <h4>Flexible rental</h4>
              <p>
                You can cancel or change most reservations for free up to 48
                hours before pickup.
              </p>
            </div>
          </HomeItem>
          <HomeItem>
            <PaidIcon />
            <div>
              <h4>No hidden costs</h4>
              <p>You know exactly what you&apos;re paying for.</p>
            </div>
          </HomeItem>
          <HomeItem>
            <AccountBalanceWalletIcon />
            <div>
              <h4>Guaranteed price alignment</h4>
              <p>
                Is there an identical offer on another site that costs less? We
                will offer you the same price.
              </p>
            </div>
          </HomeItem>
        </HomeList>
      </div>
    </BgImage>
  );
};
export default Home;

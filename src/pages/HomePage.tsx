import { ConnectButton } from '@rainbow-me/rainbowkit';
import dose from "../assets/dose.jpeg";
import simpleLogo from "../assets/simpleLogo.png";

export default function HomePage() {
    return (
        <div className='HomeContainer'>
            <ConnectButton />
            <img src={simpleLogo} style={{ marginTop: "4rem", height: "8rem", width: "auto" }} />
            <img src={dose} style={{ marginTop: "4rem", height: "40rem", width: "auto" }} />
        </div>

    );
}
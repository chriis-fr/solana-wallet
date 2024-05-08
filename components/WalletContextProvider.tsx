import { FC, ReactNode, useMemo } from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import * as web3 from "@solana/web3.js"
import * as walletAdapaterWallets from "@solana/wallet-adapter-wallets"
require("@solana/wallet-adapter-react-ui")


const WalletContextProvider:FC<{children: ReactNode}> = ({children}) => {
    const endpoint = web3.clusterApiUrl("devnet")
    const wallets = useMemo(() => [], [])

    return(
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets}>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}

export default WalletContextProvider;
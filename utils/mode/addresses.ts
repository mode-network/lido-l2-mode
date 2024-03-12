import { NetworkName } from "../network";
import { OptContractAddresses, CommonOptions } from "./types";

const ModeMainnetAddresses: OptContractAddresses = {
  L1CrossDomainMessenger: "0x14DdD08c0e28764FC89a266eC95A93619b0EE835",
  L2CrossDomainMessenger: "0x4200000000000000000000000000000000000007"
};

const ModeSepoliaAddresses: OptContractAddresses = {
  L1CrossDomainMessenger: "0x9B800c1e8b61Aa9D141BCD317dDe7849F7A043E5",
  L2CrossDomainMessenger: "0x4200000000000000000000000000000000000007",
};

export default function addresses(  
  networkName: NetworkName,
  options: CommonOptions = {}
) {
  switch (networkName) {
    case "mainnet":
      return { ...ModeMainnetAddresses, ...options.customAddresses };
    case "sepolia":
      return { ...ModeSepoliaAddresses, ...options.customAddresses };
    default:
      throw new Error(`Network "${networkName}" is not supported`);
  }
}

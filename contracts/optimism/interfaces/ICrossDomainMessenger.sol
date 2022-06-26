// SPDX-FileCopyrightText: 2022 Lido <info@lido.fi>
// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

interface ICrossDomainMessenger {
    function xDomainMessageSender() external view returns (address);

    /// Sends a cross domain message to the target messenger.
    /// @param _target Target contract address.
    /// @param _message Message to send to the target.
    /// @param _gasLimit Gas limit for the provided message.
    function sendMessage(
        address _target,
        bytes calldata _message,
        uint32 _gasLimit
    ) external;
}

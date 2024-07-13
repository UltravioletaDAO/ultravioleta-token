// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 *************************************************************************
 *                                                                       *
 *    UUUUUUUU   UUUUUUUU  VVVVVVVV    VVVVVVVV TTTTTTTTTTTTTTTTTTTTTT   *
 *    U::::::U   U::::::U  V::::::V    V::::::V T::::::::::::::::::::T   *
 *    U::::::U   U::::::U  V::::::V    V::::::V T::::::::::::::::::::T   *
 *    UU:::::U   U:::::UU  V::::::V    V::::::V T:::::TT:::::::TT:::::T  *
 *     U:::::U   U:::::U    V:::::V    V:::::V  TTTTTT  T:::::T  TTTTTT  *
 *     U:::::D   D:::::U     V:::::V  V:::::V           T:::::T          *
 *     U:::::D   D:::::U      V:::::V V:::::V            T:::::T         *
 *     U:::::D   D:::::U       V:::::V:::::V             T:::::T         *
 *     U:::::D   D:::::U        V:::::::::V              T:::::T         *
 *     U::::::U  U::::::U        V:::::::V               T:::::T         *
 *     U:::::::UU:::::::U         V:::::V                T:::::T         *
 *      UU:::::::::::::UU          V:::V               TT:::::::TT       *
 *        UU:::::::::UU             VVV                T:::::::::T       *
 *          UUUUUUUUU                                 T:::::::::T        *
 *                                                    TT:::::::TTT       *
 *                                                    T::::::TT          *
 *                                                    TTTTTTTT           *
 *                                  v2                                   *
 *************************************************************************
 **/

contract ERC20Token is ERC20 {
    uint8 public _decimals = 18;
    uint256 private _totalSupply;

    constructor(string memory name, string memory symbol, uint256 totalSupply) ERC20(name, symbol) {
        _totalSupply = totalSupply * 10 ** _decimals;
        _mint(0x52110a2Cc8B6bBf846101265edAAe34E753f3389, _totalSupply);
    }
}
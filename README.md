# cmSnap (Contract Method Snap)

Currently, many users have no idea about what transaction they are signing, and they mostly trust the frontend and the
domain that they are interacting with. Even developers sometimes do not have sufficient time to study and analyze the
contract's source code. "cmSnap" retrieves the contract's source code and identifies the method that is being triggered
in a transaction, then sends the contract code to an AI to get a simplistic explanation of the method's function, in a
way that even non-technical users can understand.

Additionally, some snaps send transaction data to a backend for a security analysis before signing. While these may
offer valuable security insights, they could potentially compromise the user's privacy. cmSnap performs all computations
within MetaMask itself, using API calls solely to gain a broad understanding of the contract source code.

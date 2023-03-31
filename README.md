# SendKrypt
A small blockchain project that connects to metamask on the frontend, uses react context to access a solidity smart contract to send ethereum 

## Getting Started
Clone the repository and use the following commands:
```
npm install
npm run dev
```
Note: metamask must be installed, otherwise you'll receive this alert:
![Screen Shot 2023-03-31 at 12 33 36 PM](https://user-images.githubusercontent.com/3720477/229178427-80017a6d-b23b-4279-91bf-892945a0e7db.png)

Click on the localhost url:
![Screen Shot 2023-03-31 at 12 34 16 PM](https://user-images.githubusercontent.com/3720477/229178597-1551b59f-7b9d-4249-b26d-be78e9ef2ae4.png)

Click the Connect Wallet button and connect your metamask account.
Next, enter in the receiving address, the amount of eth you want to send (NOTE: only send testeth for now), a string for the gif, and a message.

After confirming the transaction in metamask, you will soon see the transaction appear as well as your eth. You can check etherscan for the full transaction list.

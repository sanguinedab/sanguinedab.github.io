---
title: "使用 web3.py 部署智能合约并调用"
created_at: "2021-03-03"
summary: "在本地 geth 节点上用 solc 编译合约，再用 web3.py 部署和调用智能合约，以及 gas 不足导致部署失败的踩坑记录。"
tags: ["区块链", "智能合约", "web3.py"]
author: "sanguinedab"
---

**前提：** 启动本地geth节点，开启相关rpc服务，默认端口为8545，本人是在虚拟机中配置了geth节点

- 使用solc或者solcjs编译智能合约生成abi和bin，solc指令为控制台输出，solcjs会保存成文件。 `solc --bin Voting.sol` `solc --abi Voting.sol`

- 安装包web3py（安装时遇到一个坑，cytoolz一直安装不了，后来参考[这里](https://www.cnblogs.com/lostme/articles/9375247.html)成功解决） `pip install web3py`

- 安装成功就可以开始操作了哈哈(●ˇ∀ˇ●)~~~，web3py提供三种方式连接以太坊，这里选用http，部署合约是以交易的形式，交易需要确认后才算部署成功，所以记得要去geth挖矿噢~

```python
import json
from web3 import Web3

web3 = Web3(Web3.HTTPProvider('http://ip:8545'))
print(web3.isConnected())

account = web3.eth.accounts[0]

# 读取文件中的abi和bin,也可以当场生成
with open('data\\Voting_sol_Voting.abi', 'r') as f:
    abi = json.load(f)

with open('data\\Voting_sol_Voting.bin', 'r') as f:
    code = f.read()

newContract = web3.eth.contract(bytecode=code, abi=abi)

# 发起交易部署合约
option = {'from': account, 'gas': 1000000}
web3.geth.personal.unlock_account(account, '123')
tx_hash = newContract.constructor([b'dog', b'cat', b'bird']).transact(option)

# 等待挖矿使得交易成功
tx_receipt = web3.eth.waitForTransactionReceipt(tx_hash)
print(tx_receipt.contractAddress)
```

- 合约部署成功后就可以调用了，如果需要改变数据需要使用transac()发起交易，并等待挖矿确认，只是读取则使用cal()即可

```python
# 调用合约,合约地址就是刚刚控制台打印的
address = web3.toChecksumAddress("0x6999C68d214E1d193534601759b7F1eC534597Bf")
c = web3.eth.contract(address, abi=abi)
print(c.functions.totalVotesFor(b'dog').call())
```

**最后：** 部署合约时遇到了一个坑，捣鼓了两天，最后发现是汽油费gas没给够，导致合约部署一直失败😂

**问题：** 有个问题，小弟不明白contract.constructor()方法中的参数具体要怎么填，只知道智能合约如果有构造方法的话，参数就写构造方法的参数。如果有大佬知道，希望能为我解答，谢谢老板O(∩_∩)O！！！

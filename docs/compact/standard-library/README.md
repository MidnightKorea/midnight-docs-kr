# Compact standard library

**CompactStandardLibrary** ∙ [상세 API 레퍼런스](exports.md)

이 API는 Compact 프로그램에서 사용할 수 있는 표준 타입과 circuit를 제공합니다.
API의 주요 부분은 다음과 같습니다:

- 공통 데이터 타입:
  - [`Maybe`](exports.md#maybe)
  - [`Either`](exports.md#either)
  - [`NativePoint`](exports.md#nativepoint)
  - [`MerkleTreeDigest`](exports.md#merkletreedigest)
  - [`MerkleTreePathEntry`](exports.md#merkletreepathentry)
  - [`MerkleTreePath`](exports.md#merkletreepath)
  - [`ContractAddress`](exports.md#contractaddress)
  - [`ZswapCoinPublicKey`](exports.md#zswapcoinpublickey)
  - [`UserAddress`](exports.md#useraddress)
- 코인 관리 데이터 타입:
  - [`ShieldedCoinInfo`](exports.md#shieldedcoininfo)
  - [`QualifiedShieldedCoinInfo`](exports.md#qualifiedshieldedcoininfo)
  - [`ShieldedSendResult`](exports.md#shieldedsendresult)
- 공통 함수:
  - [`some`](exports.md#some)
  - [`none`](exports.md#none)
  - [`left`](exports.md#left)
  - [`right`](exports.md#right)
- 해싱 함수:
  - [`transientHash`](exports.md#transienthash)
  - [`transientCommit`](exports.md#transientcommit)
  - [`persistentHash`](exports.md#persistenthash)
  - [`persistentCommit`](exports.md#persistentcommit)
  - [`degradeToTransient`](exports.md#degradetotransient)
- 타원 곡선 함수:
  - [`ecAdd`](exports.md#ecadd)
  - [`ecMul`](exports.md#ecmul)
  - [`ecMulGenerator`](exports.md#ecmulgenerator)
  - [`hashToCurve`](exports.md#hashtocurve)
  - [`upgradeFromTransient`](exports.md#upgradefromtransient)
- Merkle 트리 함수:
  - [`merkleTreePathRoot`](exports.md#merkletreepathroot)
  - [`merkleTreePathRootNoLeafHash`](exports.md#merkletreepathrootnoleafhash)
- 코인 관리 함수:
    - [`tokenType`](exports.md#tokentype)
    - [`nativeToken`](exports.md#nativetoken)
    - [`ownPublicKey`](exports.md#ownpublickey)
    - [`createZswapInput`](exports.md#createzswapinput)
    - [`createZswapOutput`](exports.md#createzswapoutput)
    - [`mintShieldedToken`](exports.md#mintshieldedtoken)
    - [`evolveNonce`](exports.md#evolvenonce)
    - [`receiveShielded`](exports.md#receiveshielded)
    - [`sendShielded`](exports.md#sendshielded)
    - [`sendImmediateShielded`](exports.md#sendimmediateshielded)
    - [`mergeCoin`](exports.md#mergecoin)
    - [`mergeCoinImmediate`](exports.md#mergecoinimmediate)
    - [`shieldedBurnAddress`](exports.md#shieldedburnaddress)
    - [`mintUnshieldedToken`](exports.md#mintunshieldedtoken)
    - [`sendUnshielded`](exports.md#sendunshielded)
    - [`receiveUnshielded`](exports.md#receiveunshielded)
    - [`unshieldedBalance`](exports.md#unshieldedbalance)
    - [`unshieldedBalanceLt`](exports.md#unshieldedbalancelt)
    - [`unshieldedBalanceGte`](exports.md#unshieldedbalancegte)
    - [`unshieldedBalanceGt`](exports.md#unshieldedbalancegt)
    - [`unshieldedBalanceLte`](exports.md#unshieldedbalancelte)
    - [`shieldedburnaddress`](exports.md#shieldedburnaddress)
- 블록 시간 함수:
  - [`blockTimeLt`](exports.md#blocktimelt)
  - [`blockTimeGte`](exports.md#blocktimegte)
  - [`blockTimeGt`](exports.md#blocktimegt)
  - [`blockTimeLte`](exports.md#blocktimelte)

# Compact standard library

**CompactStandardLibrary** ∙ [상세 API 레퍼런스](exports.md)

이 API는 Compact 프로그램에서 사용할 수 있는 표준 타입과 circuit을 제공합니다.
API의 주요 부분은 다음과 같습니다:

- 공통 데이터 타입:
  - [`Maybe`](exports.md#maybe)
  - [`Either`](exports.md#either)
  - [`PublicAddress`](exports.md#publicaddress)
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
  - [`upgradeFromTransient`](exports.md#upgradefromtransient)
  - [`keccak256`](exports.md#keccak256)
  - [`sha512`](exports.md#sha512)
- 타원 곡선 타입·함수:
  - [`JubjubPoint`](exports.md#jubjubpoint)
  - [`JubjubScalar`](exports.md#jubjubscalar)
  - [`constructJubjubPoint`](exports.md#constructjubjubpoint)
  - [`jubjubPointX`](exports.md#jubjubpointx)
  - [`jubjubPointY`](exports.md#jubjubpointy)
  - [`Secp256k1Point`](exports.md#secp256k1point)
  - [`Secp256k1Base`](exports.md#secp256k1base)
  - [`Secp256k1Scalar`](exports.md#secp256k1scalar)
  - [`secp256k1PointX`](exports.md#secp256k1pointx)
  - [`secp256k1PointY`](exports.md#secp256k1pointy)
  - [`Secp256r1Point`](exports.md#secp256r1point)
  - [`Secp256r1Base`](exports.md#secp256r1base)
  - [`Secp256r1Scalar`](exports.md#secp256r1scalar)
  - [`secp256r1PointX`](exports.md#secp256r1pointx)
  - [`secp256r1PointY`](exports.md#secp256r1pointy)
  - [`Curve25519Point`](exports.md#curve25519point)
  - [`Curve25519Base`](exports.md#curve25519base)
  - [`Curve25519Scalar`](exports.md#curve25519scalar)
  - [`curve25519PointX`](exports.md#curve25519pointx)
  - [`curve25519PointY`](exports.md#curve25519pointy)
  - [`ecAdd`](exports.md#ecadd)
  - [`ecNeg`](exports.md#ecneg)
  - [`ecMul`](exports.md#ecmul)
  - [`ecMulGenerator`](exports.md#ecmulgenerator)
  - [`hashToCurve`](exports.md#hashtocurve)
- 필드 산술 함수:
  - [`neg`](exports.md#neg)
  - [`inv`](exports.md#inv)
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
- 블록 시간 함수:
  - [`blockTimeLt`](exports.md#blocktimelt)
  - [`blockTimeGte`](exports.md#blocktimegte)
  - [`blockTimeGt`](exports.md#blocktimegt)
  - [`blockTimeLte`](exports.md#blocktimelte)
- 암호 서명 타입·함수:
  - [`JubjubSchnorrSignature`](exports.md#jubjubschnorrsignature)
  - [`jubjubSchnorrVerify`](exports.md#jubjubschnorrverify)
  - [`Secp256k1EcdsaSignature`](exports.md#secp256k1ecdsasignature)
  - [`secp256k1EcdsaVerify`](exports.md#secp256k1ecdsaverify)
  - [`secp256k1EthereumAddress`](exports.md#secp256k1ethereumaddress)
  - [`Secp256r1EcdsaSignature`](exports.md#secp256r1ecdsasignature)
  - [`secp256r1EcdsaVerify`](exports.md#secp256r1ecdsaverify)
  - [`Ed25519Signature`](exports.md#ed25519signature)
  - [`ed25519Verify`](exports.md#ed25519verify)
- Ledger 필드:
  - [`kernel`](exports.md#kernel) -- 연산은 [Ledger data types](../../ledger-adt.mdx)
    참고
- `emit`으로 발생시킬 수 있는 [Events](exports.md#events):
  - [`ShieldedSpend`](exports.md#shieldedspend),
    [`ShieldedReceive`](exports.md#shieldedreceive),
    [`ShieldedMint`](exports.md#shieldedmint),
    [`ShieldedBurn`](exports.md#shieldedburn)
  - [`UnshieldedSpend`](exports.md#unshieldedspend),
    [`UnshieldedReceive`](exports.md#unshieldedreceive),
    [`UnshieldedMint`](exports.md#unshieldedmint),
    [`UnshieldedBurn`](exports.md#unshieldedburn)
  - [`Paused`](exports.md#paused), [`Unpaused`](exports.md#unpaused),
    [`Misc`](exports.md#misc)

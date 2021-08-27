#	three-pass protocol

It's framework for sending messages which allows one party to securely send a message to second party without any need of exchanging/distribute their encryption keys.

This framework uses commutative encryption which means order-independent. In other words, it must be possible to remove the first encryption with the key `e` even though a second encryption with the key `k` has been performed.


[wiki page](https://en.wikipedia.org/wiki/Three-pass_protocol)


##	working:

>	sender's message = `m`
>	sender's encryption key = `k`
>	sender's decryption key = `l`
>	reciever's encryption key = `p`
>	reciever's decryption key = `q`

1.	Sender encrypts message `m` with his encryption function `k` and sends it to reciever;  
```
m1 = E(k, m)
```

2.	Reciever encrypt the recieved message `m1 = E(k, m)` with his encryption key `p` and sends back to sender.
```
m2 = E(p, m1)
m2 = E(p, E(k, m))
```

3.	Sender decrypt recieved message `m2 = E(p, m1)` with his decryption key `l` and send it to reciever.
```
m3 = D(l, m2)
m3 = D(l, E(p, m1))
m3 = D(l, E(p, E(k, m)))
m3 = E(p, m)
```

	>	Here it's called called `commutative encryption`, which means order of encryption doesn't matter while decrypting the cypher.

4.	Now Reciever get message, `m3 = E(p, m)` which he can decrypt with his decryption key `q`; therefore finally gets the message `m`.
```
m3 = E(p, m)
m4 = D(q, E(p, m))
m4 = m -> 🎉
```


#	Feistel cipher

[wiki page](https://en.wikipedia.org/wiki/Feistel_cipher)

It uses a rounded function which takes two arguments, a *data block* and *sub-key* and return one output, same size as the data block.

In each round, rounded function is run on half of the data to be encrypted and it's output is XORed with other half of ata.

This is repeated a fixed number of times, and final output is encrypted data.

##	working:

Let F be the **round function**
Let K0, K1, K2 ... Kn  be the **sub-keys** for rounds 1, 2, 3 ... n.

Let **data block** be the plain text to be encrypted.

Now split data block into two pieces (L0, R0)

###	Encryption of data block

for each round -> `i=0` to `i < n`,

```
L(i+1) = Ri
R(i+1) = XOR(Li, F(Ri, Ki))
```
then the **cipherText** is `L(n+1), R(n+1)`.


###	Decryption of cipherText:

for each round -> `i=n` to `i=0`,

```
Ri = L(i+1)
Li = XOR(R(i+1), F(L(i+1), Ki))
```

then the **plainText** is `L0, R0`.

*	FYI: Unbalanced Feistel ciphers use a modified structure where L0 and R0 are not of equal lengths.




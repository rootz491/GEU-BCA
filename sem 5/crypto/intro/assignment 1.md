#	assignment 1

> 	Suppose Alice and Bob decide to use the following “three-pass protocol” to setup a shared secret session key K. First, Alice chooses a random K. Alice also generates a random secret one-time pad key KA and XORs it with K. She sends M1 = KA XOR K to Bob. Bob generates a random secret one-time pad key KB, XORs what he receives with it to compute M2 = M1 XOR KB, and sends M2 to Alice. Alice computes M3 = M2 XOR KA, and sends M3 to Bob, who recovers K as M3 XOR KB. Note that KA is known only to Alice, KB only to Bob.

1.	Show that K=M3 XOR KB.

let k be the secret message  

alice's random secret key = KA  
bob's random secret key = KB  

//	alice to bob  
M1 = XOR(KA, k)  

//	bob to alice  
M2 = XOR(KB, M1)  
M2 = XOR(KB, XOR(KA, k))  

//	alice to bob  
M3 = XOR(KA, M2)  
M3 = XOR(KA, XOR(KB, M1))  
M3 = XOR(KA, XOR(KB, XOR(KA, k)))   
M3 = XOR(KB, k)  

//	finally bob  
M4 = XOR(KB, M3)  
M4 = XOR(kB, XOR(KB, k))  
M4 = k 🥳  

therefore, k = XOR(KB, M3)

2.	Suppose Eve can intercept the communication. Is this protocol secure against an eavesdropper Eve? If not, what can Eve recover?

*	Even if someone is doing man-in-the-middle attack, he cannot read the actual message `k`. Because when message lefts the sender or reciever, it's already encrypted atleast once with secret key which is only avaialbe to excryptor of message.   

*	without secret key, reading content of message is out of question, therefore Eve can only get encrypted message which is useless, as it's a **cypher**.   


---


>	In a Feistel system, we divide the state into left and right halves LiRi and then define the new state by Li+1 = Ri and Ri+1 = Li XOR f(Ki, Ri) where Ki is the key for the ith round and f is a function of the key and half of the state. Prove that no matter what the function f is, the round transformation is 1-to-1, i.e., we can recover the old state from the new state and the key.

Let F be the **round function**  
Let K0, K1, K2 ... Kn  be the **sub-keys** for rounds 1, 2, 3 ... n.   
  
Let **data block** be the plain text to be encrypted.  

Now split data block into two pieces (L0, R0)  

####	Encryption of data block  
  
for each round -> `i=0` to `i < n`,   

```
L(i+1) = Ri
R(i+1) = XOR(Li, F(Ri, Ki))
```
then the **cipherText** is `L(n+1), R(n+1)`.   

####	Decryption of cipherText:   

for each round -> `i=n` to `i=0`,   

```
Ri = L(i+1)
Li = XOR(R(i+1), F(L(i+1), Ki))
```

then the **plainText** is `L0, R0`.   

---

>	A university wants to conduct student union election, and decides to go for electronic voting. Following steps are followed in electronic voting.
>	Note -> CTF: Central Tabulating Facility
>	
>	(i)	 	Each voter signs his vote with the his private key  
>	(ii) 	Each voter encrypts his signed vote with the CTF’s public key  
>	(iii)	Each voter sends his vote to a CTF  
>	(iv) 	The CTF decrypts the votes, checks the signatures, tabulates the votes, and makes the results public


1. 	Give two problem associated with this type of electronic voting.  

2.	Give one solution with CTF and one solution without CTF.  


*	Since after decryption, system only checks for valid signature. Therefore, Same user can make multiple votes and all of them will be vaild.   

*	Assuming private key is only available to corresponding voter, there's no way to find which vote belongs to which voter.   

---

>	A club which is having 200 members wants to conduct president election, and decides to go for electronic voting. Following steps are followed in electronic voting.
>	
>	i. Each voter signs his vote with the his private key
>	ii. Each voter encrypts his signed vote with the CTF’s public key
>	iii. Each voter sends his vote to a CTF
>	iv. The CTF decrypts the votes, checks the signatures, tabulates the votes, and makes the results public.


1.	How many keys will be needed to conduct this election?

	*	1 private key for each member = 200
	*	CTF's public key & private key
	*	Total = 202

2.	Give two problem associated with this type of electronic voting.

	*	same as previous answer.

---

>	Using the positional value of alphabets, represent them in 5 bit binary. apply the transformation Ci=Ki EX-OR Pi,Pi=Ci EX-OR Ki where Pi="mcabsec" Ki="keyciph". Find the cipher text

**given:**   

Ci = XOR(Ki, Pi)   
Pi = XOR(Ci, Ki)   
Pi="mcabsec"   
Ki="keyciph"	

Ci = ?


----


















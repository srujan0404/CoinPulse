# Propositions & Logic

**Proposition** is a declarative sentence (that is, one that declares a fact) that is either true or false, but not both.

- **Examples of propositions**
	- can be true
		- Britain is a part of Europe
		- $2^2 = 4$
	- can be false - still a valid proposition
		- Earth is the nearest planet to the sun
		- $2^2 = 10$
- **not-propositions**
	- $x+2 = 10$   is not a proposition because it depends on $x$
	- *"Please give me some water"* is not a proposition because it is not a declarative sentence - it is a request
	- *"This statement is false"* is a **paradox** - it is neither true, nor false
	- *"I always tell lies"* is a **paradox** - it is neither true, nor false
	- *"What is the color of the sky"* is a question, not a declarative sentence

**Atomic propositions** are propositions that can not be further divided into different propositions.
example: $p: \text{ India is a country}$

**Compound propositions** are propositions that are formed by combining one or more atomic propositions using connectives. 
example: $q: \text{ India is a country, and it is a part of Asia}$



## Logical Operators / Connectives

**Truth Table** The truth table shows the output for each possible truth value of inputs.

For $k$ variables, the truth table will have $2^k$ rows (since each variable has 2 possibilities - T / F)

**Connectives** are the operators that are used to combine one or more propositions.


## Negation / Not  $\large (\neg)$
#### Example
$p: \text{ It is snowing today}$
$\neg p: \text{ It is not snowing today}$

$q: \text{ x is less than 10}$ (that is, $x < 10$)
$\neg q: \text{ x is more than 10, or x is equal to 10}$ (that is, $x \geq 10$)

#### Truth Table

| $p$ | $\neg p$ |
|--|--|
| F | **T** |
| T | **F** |

## Conjunction / And $\large (\land)$
Similar to multiplication $(\cdot)$
#### Example
$p: \text{ It is snowing today}$
$q: \text{ John is carrying an umbrella}$
$p \land q: \text{ It is snowing today, and John is carrying an umbrella}$

#### Truth Table
| $p$ | $q$ | $p \land q$ |
|--|--|--:|
| F | F | **F** |
| F | T | **F** |
| T | F | **F** |
| T | T | **T** |

## Disjunction / Or $\large (\lor)$
Similar to addition $(+)$
#### Example
$p: \text{ I'm watching a movie}$
$q: \text{ I'm eating}$
$p \land q: \text{ I'm watching a movie or I'm eating}$ (note - both together is possible for OR)

#### Truth Table
| $p$ | $q$ | $p \lor q$ |
|--|--|--:|
| F | F | **F** |
| F | T | **T** |
| T | F | **T** |
| T | T | **T** |



## Logical Equivalences $(\equiv)$

$\begin{array}{c|c|c}
p \land T \equiv p    &    p \cdot 1 = p & \text{Identity} \\[1em]
p \lor F \equiv p    &    p + 0 = p & \text{(no effect)} \\[1em]
\hline \\[0.2em]
p \lor T \equiv T    &    p + 1 = 1 & \text{Domination} \\[1em]
p \land F \equiv F    &    p \cdot 0 = 0 \\[1em]
\hline \\[0.2em]
p \lor p \equiv p    &    p + p = p & \text{Idempotence} \\[1em]
p \land p \equiv p    &    p \cdot p = p& \text{(repetition doesn't matter)} \\[1em]
\hline \\[0.2em]
\neg (\neg p) \equiv p    &    \overline{\overline{p}} = p & \text{Double Negation} \\[1em]
\hline \\[0.2em]
p \lor q \equiv q \lor p    &    p + q = q + p& \text{Commutative} \\[1em]
p \land q \equiv q \land p    &    p \cdot q = q \land p & \text{(can shuffle things if same operator)} \\[1em]
\hline \\[0.2em]
(p \lor q) \lor r \equiv p \lor (q \lor r)    &    (p + q) + r = p + (q + r) & \text{Associative} \\[1em]
(p \land q) \land r \equiv p \land (q \land r)    &    (p \cdot q) \cdot r = p \cdot (q \cdot r) \\[1em]
\hline \\[0.2em]
p \lor (q \land r) \equiv (p \lor q) \land (p \lor r)    &    p + qr = (p + q) \cdot (q + r) & \text{Distributive} \\[1em]
p \land (q \lor r) \equiv (p \land q) \lor (p \land r)    &    p \cdot (q+r) = pq + pr \\[1em]
\hline \\[0.2em]
\neg(p \land q) \equiv \neg p \lor \neg q    &    \overline{p\cdot q} = \overline p + \overline q  & \text{De-Morgan's} \\[1em]
\neg(p \lor q) \equiv \neg p \land \neg q    &    \overline{p+ q} = \overline p \cdot \overline q  & \text{(break the line, change the sign)} \\[1em]
\hline \\[0.2em]
p \lor (p \land q) \equiv p    &    p + pq = p & \text{Absorption} \\[1em]
p \land (p \lor q) \equiv p    &   p \cdot (p+q) = p \\[1em]
\hline \\[0.2em]
p \lor \neg p \equiv T    &    p + \overline p = 1 & \text{Negation} \\[1em]
p \land \neg p \equiv F    &    p \cdot \overline p = 0
\end{array}$





## Conditionals $(\overset{\text{premise}}{p} \to \overset{\text{conclusion}}{q})$
|  |  |
|--|--|
| $p$ implies $q$ | $q$ if $p$ |
| if $p$, then $q$ | $q$ whenever $p$ |
| $p$ is sufficient for $q$ | $q$ unless $\neg p$ |
| $p$ only if $q$ | $q$ is necessary for $p$ |
| | $q$ follows from $p$ |
| | $q$ provided that $p$ |
-- --

| | |
|--|--|
**Tautology** | always true
**Contradiction** | always false
**Contingency** | sometimes true, sometimes false
-- --
$$\begin{array}{c|c}
p \to q & \text{implication}\\[1em]
\neg q \to \neg p & \text{contrapositive}\\[1em]
(p \to q) \equiv (\neg q \to \neg p) & \text{implication} \equiv \text{contrapositive}\\[1em]
\hline \\[0.2em]
q \to p & \text{converse} \\[1em]
\neg p \to \neg q & \text{inverse}\\[1em]
(q \to p) \equiv (\neg p \to \neg q) & \text{converse} \equiv \text{inverse}\\[1em]
\end{array}$$


## Conditional Equivalences $(\equiv)$

$\begin{array}{ccc|c}
p \to q &\equiv& \neg p \lor q & \text{implication to connectives} \\[1em]
\hline\\[0.2em]
p \to q &\equiv& \neg q \to \neg p & \text{implication} \equiv \text{contrapositive} \\[1em]
q \to p &\equiv&  \neg p \to \neg q & \text{converse} \equiv \text{inverse} \\[1em]
\hline\\[0.2em]
(p \to q) \land (p \to r) &\equiv& p \to (q \land r) \\[1em]
(p \to q) \lor (p \to r) &\equiv& p \to (q \lor r) \\[1em]
\hline\\[0.2em]
(p \to q) \land (q \to r) &\equiv& (p\lor q) \to r \\[1em]
(p \to q) \lor (q \to r) &\equiv& (p\land q) \to r \\[1em]
\hline\\[0.2em]
p \iff q &\equiv& (p \to q) \land (q \to p) & \text{bi-implication} \\[1em]
p \iff q &\equiv& (p\land q) \lor (\neg p \land \neg r) & \text{(if and only if)} \\[1em]
p \iff q &\equiv& pq + \bar p \bar q & \text{(equivalent)} \\[1em]
\end{array}$

## Predicates & Quantifiers

- **Predicate:** a proposition about some object(s)
	- $P(x): x < 10$
	- $P(a, b, c): a^2 + b^2 = c^2$
	- $P(x): x \text{ is a student}$
- **Domain/Universe of Discourse**: all possible values of the variable(s) under consideration
	- $U = \text{all integers}$
 	- $U = \text{all students}$
 	- $U = \text{everything}$
- **Quantifiers**: convert predicates into propositions about the universe

### Universal Quantifier - ForAll $(\forall)$
$\forall x: P(x)$ means that $P(x)$ is true for all values of $x \in U$

**Prove:** must show that it is true for all values
**Disprove:** find 1 **counterexample**

Examples:
- All students are hard-working
	- $U =$ all students
        $\forall x: \text{hardworking}(x)$
	- $U =$ everthing
        $\forall x: \text{student}(x) \to \text{hardworking}(x)$
- All that glitters is not gold
	- $U =$ everything
	    $\neg \Bigl ( \forall x: \text{Glitter}(x) \to \text{Gold}(x) \Bigr )$

To combine multiple facts, we always use implication $(\to)$ with forall $(\forall)$

### Existential Quantifier - Exists $(\exists)$
$\exists x: P(x)$ means that $P(x)$ is true for at least 1 value of $x \in U$ (there might be more for which it is true, but at least 1)

**Prove:** find 1 **evidence**
**Disprove:** must show that it is false for all values


Examples:
- Some students are hard-working
	- $U =$ all students
        $\exists x: \text{hardworking}(x)$
	- $U =$ everthing
        $\exists x: \text{student}(x) \land \text{hardworking}(x)$
- All that glitters is not gold
	- $U =$ everything
	    $\exists x: \text{Glitter}(x) \land \neg \text{Gold}(x)$

### Nested Quantifiers

- if all quantifiers are same, then order does not matter
- if quantifiers are different, then order matters

Examples
- every number except 0 has a multiplicative inverse
    $\forall x: \Biggl [ x \neq 0 \to \Bigl ( \exists y: x\cdot y = 1 \Bigr ) \Biggr ]$
- every number except 0 has exactly 1 multiplicative inverse
    $\forall x: \Biggl [ x \neq 0 \to \exists y: \Bigl (x\cdot y = 1 \land \bigl [\neg \exists z: (y \neq z \land x\cdot z = 1) \bigr ] \Bigr  ) \Biggr ]$
- definition of rational numbers
    $\forall x: \Biggl [\text{Rational}(x) \iff \exists p \exists q: \Bigl ( x = p/q, p, q \in \mathbb{Z}, q \neq 0, gcd(p, q) = 1 \Bigr ) \Biggr ]$
- definition of even numbers
    $\forall x: \Biggl [ \text{Even}(x) \iff \exists k: \Bigl ( x = 2 \cdot k, k \in \mathbb{Z} \Bigr ) \Biggr ]$

### De-Morgan's Law
- move the negation inwards, and change the quantifier

$\begin{array}{ccc}
\neg \exists x: P(x) &\equiv& \forall x: \neg P(x) \\
\text{no student is short} &\equiv& \text{all students are tall} \\[1em]
\hline \\[0.2em]
\neg \forall x: P(x) &\equiv& \exists x: \neg P(x) \\
\text{not all students are rich} &\equiv& \text{there is some poor student} \\[1em]
\end{array}$

## Rules of Inference

Rules of inference | Tautology | Name
--|--|--
$\begin{array}{}p\\p \rightarrow q\\\therefore \overline{q \quad \quad \quad} \\\end{array}$ | $(p \wedge (p \rightarrow q))  \rightarrow q$ | Modus ponens
$\begin{array}{}\neg q\\p \rightarrow q\\\therefore \overline{\neg p \quad \quad \quad} \\\end{array}$ | $(\neg q \wedge (p \rightarrow q))  \rightarrow \neg p$|Modus tollens
$\begin{array}{}p \rightarrow q\\q \rightarrow r\\\therefore \overline{p \rightarrow r} \\\end{array}$ | $((p \rightarrow q) \wedge (q \rightarrow r)) \rightarrow (p \rightarrow r)$ | Hypothetical syllogism
$\begin{array}{}p \rightarrow q\\\therefore \overline{p \rightarrow (p \wedge q)} \\\end{array}$| $(p \rightarrow q) \rightarrow (p \rightarrow (p \wedge q))$| Absorption (logic)|Absorption
$\begin{array}{}p\\q\\\therefore \overline{p \wedge q} \\\end{array}$| $((p) \wedge (q))  \rightarrow (p \wedge q)$| Conjunction introduction
$\begin{array}{}p \wedge q \\\therefore \overline{p \quad \quad \quad} \\\end{array}$| $(p \wedge q)  \rightarrow p$| Conjunction elimination
$\begin{array}{} p \\\therefore \overline{p \vee q} \\\end{array}$| $p \rightarrow (p \vee q)$| Disjunction introduction
$\begin{array}{}p \rightarrow q\\r \rightarrow q\\p \vee r\\\therefore \overline{q \quad \quad \quad} \\\end{array}$| $((p \rightarrow q) \wedge (r \rightarrow q) \wedge (p \vee r)) \rightarrow q$| Disjunction elimination
$\begin{array}{}p \vee q \\\neg p \\\therefore \overline{q \quad \quad \quad} \\\end{array}$| $((p \vee q) \wedge \neg p) \rightarrow q$| Disjunctive syllogism
$\begin{array}{}p \vee p \\\therefore \overline{p \quad \quad \quad} \\\end{array}$| $(p \vee p)  \rightarrow p$| Idempotency|Disjunctive simplification
$\begin{array}{}p \vee q \\\neg p \vee r \\\therefore \overline{q \vee r} \\\end{array}$| $((p \vee q) \wedge (\neg p \vee r)) \rightarrow (q \vee r)$| Resolution (logic)|Resolution
$\begin{array}{}p \rightarrow q\\q \rightarrow p\\\therefore \overline{p \leftrightarrow q} \\\end{array}$| $((p \rightarrow q) \wedge (q \rightarrow p)) \rightarrow (p \leftrightarrow q)$| Biconditional introduction

# Common Sets

| | |
|--|--|--
**Naturals $(\mathbb{N})$** | $\{1, 2, 3, 4 \ldots\}$
**Whole $(\mathbb{W})$** | $\{0, 1, 2, 3, 4 \ldots\} = \mathbb{N} \cup \{0\}$
**Integers $(\mathbb{Z})$** | $\{\ldots -3, -2, -1, 0, 1, 2, 3, 4 \ldots\}$
**Positive Integers $(\mathbb{Z}^+)$** | $\{1, 2, 3, 4 \ldots\} = \mathbb{N}$
**Negative Integers $(\mathbb{Z}^-)$** | $\{-1, -2, -3 \ldots\}$
**Non-Negative Integers** | $\{0, 1, 2, 3 \ldots\} = \mathbb{Z}^+ \cup \{0\}$ 
**Whole $(\mathbb{W})$** | $\{0, 1, 2, 3, 4 \ldots\} = \mathbb{N} \cup \{0\}$
**Rationals $(\mathbb{Q})$** | $x$ is rational iff it can be written as $x = \dfrac p q$ where $p, q \in \mathbb{Z}$ and $q \neq 0$ and $gcd(p, q) = 1$ (that is, it can be converted to its lowest terms)
**Irrationals $(\mathbb{I})$** | $x$ is irrational iff it is not rational
**Reals $(\mathbb{R})$** | all numbers on the number line $= \mathbb{Q} \cup \mathbb{I}$
**Even** | $n$ is even iff it can be written as $n=2k$ where $k \in \mathbb{Z}$
**Odd** | $n$ is odd iff it can be written as $n=2k + 1$ where $k \in \mathbb{Z}$
**Perfect Square** | $n$ is a perfect square iff it can be written as $n=k^2$ where $k \in \mathbb{Z}$


# Proofs

| | |
|--|--|
**Theorem** | statement which can be shown to be true
**Axiom/Postulate** | statements we assume to be true
**Lemma** | less important theorem that is helpful in the proof of other results
**Corollary** | theorem that can be established directly from a theorem that has been proved
**Conjecture** | statement that is being proposed to be a true statement, usually on the basis of some partial evidence, a heuristic argument, or the intuition of an expert. <br/>When a proof of a conjecture is found, the conjecture becomes a theorem. <br/>Many times conjectures are shown to be false, so they are not theorems.
**Vacuous Proof** | Proof for $p \to q$ is vacuous if $p$ is always false (nothing to prove)
**Trivial Proof** | Proof for $p \to q$ is trivial if $q$ is always true (obvious to prove)

## Direct Proofs 

- to show $p \to q$
- assume that $p$ is true
- use axioms, definitions, and previously proven theorems, together with rules of inference
- show that $q$ must also be true

### Example 1: Prove that "If $n$ is an odd integer, then $n^2$ is odd.
**Direct Proof**
Without loss of generality, consider an odd number $n$.
By definition of odd, we can write $n$ as $n = 2k+1, k \in \mathbb{Z}$

Consider $n^2$. We can write it as
$$\begin{align*}{}
n^2 &= (2k+1)^2\\[1em]
&=2 \cdot (2k^2 + 2k) + 1\\[1em]
&= 2 m + 1 & \bigl \{ m = 2k^2 + 2k\\[1em]
\end{align*}$$

Therefore, $n^2$ is also odd
$\square$

### Example 2: Prove that if $m$ and $n$ are both perfect squares, then $nm$ is also a perfect square

**Direct Proof**
Consider two perfect squares $m$ and $n$.

By the definition of a perfect square, we can write $m=s^2$ and $n=t^2$ where $s, t \in \mathbb{Z}$

Consider $nm$. We can write as 
$$\begin{align*}{}
nm &= s^2 \times t^2\\[1em]
&=(st)^2 \\[1em]
&= k^2 & \Bigl \{ k = st
\end{align*}$$

Therefore, $nm$ is also a perfect square
$\square$

## Proof by Contraposition


- to show $p \to q$
- use the contrapositive $\neg q \to \neg p$, since  it is equivalent to the implication
- show that the contrapositive is true

### Example 1: Prove that if $n$ is an integer and $3n + 2$ is odd, then $n$ is odd.

**Proof by Contraposition**

Contrapositive: if $n$ is even, then $3n+2$ is even

Consider an even number $n$. By definition, we can write $n$ as $n = 2k, k \in \mathbb{Z}$

Therefore,
$$\begin{align*}{}
3n+2 &= 3\cdot(2k) + 2\\[1em]
&=6k + 2 \\[1em]
&= 2 \cdot (3k+1) \\[1em]
&= 2m & \Bigl \{ m = 3k + 1
\end{align*}$$

Therefore, $3n+2$ is also even.
$\square$

### Example 2: Prove that if $n=ab$,  where $a$ and $b$ are positive integers, then $a \leq \sqrt n$ or $b \leq \sqrt n$

**Proof by Contraposition**

Contrapositive (using De-Morgan's law):
"if $a$ and $b$ are positive integers such that $\Bigl (a > \sqrt n \Bigr )$ **AND** $\Bigl (b > \sqrt n\Bigr )$, then $n \neq ab$"


Consider two positive integers number $a > \sqrt n$ and  $b > \sqrt n$.
Then,
$$\begin{align*}{}
ab &= \Bigl (\sqrt n + \delta_1 \Bigr ) \cdot  \Bigl (\sqrt n + \delta_1 \Bigr )  & \Bigl \{ \delta_1 > 0, \delta_2 > 0\\[1em]
&=n + \sqrt n \cdot (\delta_1 + \delta_2) \\[1em]
&> n
\end{align*}$$

Therefore, $ab \neq n$ 
$\square$


## Proof by Contradiction

- to prove $p$
- assume (for the sake of contradiction) that $p$ is false
- show that this assumption leads to a contradiction
- hence, $p$ must be true

### Example 1: Prove that $\sqrt 2$ is irrational

**Proof by Contradiction**

Assume, for the sake of contradiction, that $\sqrt 2$ is rational. 

By definition of rational, we should be able to write it as
$\sqrt 2 = p / q, \text{ where } \begin{cases} p, q \in \mathbb{Z} \\ q \neq 0 \\ gcd(p, q) = 1\end{cases}$

Now,
$$\begin{align*}
2 &= \frac{p^2}{q^2} & \text{squaring both sides} \\[1em]
2q^2 &= p^2  \\[1em]
\end{align*}$$

Therefore, we have that $p^2$ is even, which means that $p$ is even (by Lemma 1)
> **Lemma 1:** if $p^2$ is even, then $p$ must be even
> 
> Proof by contraposition: $(p \text{ is odd}) \to (p^2 \text{ is odd})$
> Consider an odd number $p$
> By definition of off, we can write $p = 2k+1, k \in \mathbb{Z}$
> Now,
> $$\begin{align*}
> p^2 &= (2k+1)^2 \\[1em]
> &=2(2k^2+2) + 1 \\[1em]
> &= 2m + 1 & \Bigl \{ m = 2k^2 + 2
> \end{align*}$$
> Therefore, $p^2$ is odd
> $\square$

Therefore,
$$\begin{align*}
2q^2 &= p^2  \\[1em]
2q^2 &= (2m)^2  & \Bigl \{ \because p \text{ is even} \\[1em]
q^2 &= 2m^2
\end{align*}$$
Therefore, $q^2$ is even, which means that $q$ is also even (by Lemma 1)

Thus, $gcd(p, q) = 2$, which is a contradiction.

$\square$

## Proof by Constructive Evidence

- to show $\exists x: P(x)$
- find evidence for $x$ which satisfies $P(x)$

### Example 1: Prove that $\exists a, b, c \in \mathbb{Z}: a^2 + b^2 = c^2$

**Proof by Constructive Evidence**

Let $a = 3, b = 4, c = 5$
Then,
$$\begin{align*}
a^2 + b^2 &= 3^2 + 4^2 \\
&= 25 \\
&= c^2
\end{align*}$$

$\square$

## Proof by Non-constructive Evidence

- to show $\exists x: P(x)$
- do some magic! (no other way to put it)

### Example 1: Show that there exist irrational numbers $x$ and $y$ such that $x^y$ is rational.

**Proof by Non-constructive Evidence**

We know that $\sqrt 2$ is irrational

Consider $n = \sqrt 2^{\sqrt 2}$. Two cases arise.

- **Case 1:** $n = \sqrt 2^{\sqrt 2}$ is rational
    In this case, we've found two irrational numbers $x = \sqrt 2$ and $y = \sqrt 2$ such that $x^y$ is rational.
    
- **Case 2:** $n = \sqrt 2^{\sqrt 2}$ is irrational
    Let $x = \sqrt 2^{\sqrt 2}$ and $y = \sqrt 2$.
    Then,  $x^y = \left ( \sqrt 2^{\sqrt2} \right )^{\sqrt 2} = \left ( \sqrt 2 \right )^{\sqrt 2 \cdot \sqrt 2} = \sqrt 2^2 = 2$, which is rational

$\square$


## Mathematical Induction

- Does infinite proofs in 1
- Similar to recursion
- 3 step process
	1. Induction hypothesis $H(n)$
	2. Base cases: $H(n_0), H(n_1), \ldots$
	3. Induction Step: $H(n) \to H(n+1)$

### Example 1 - Prove that $1 + 2 + 3 + \cdots + n = \dfrac{n(n+1)}2$

**Proof by Induction**

**Induction Hypothesis:** $H(n): 1 + 2 + 3 + \cdots + n = \dfrac{n(n+1)}2, n \in \mathbb{N}$

**Base Cases:**
- $1 = \dfrac{1(1+1)}{2}$. Therefore, $H(1) \checkmark$

- $1 + 2 = 3 = \dfrac{2(2+1)}{2}$. Therefore, $H(2) \checkmark$
- $1 + 2 + 3 = 6 = \dfrac{3(3+1)}{2}$. Therefore, $H(3) \checkmark$

**Inductive Step:** To show $H(n) \to H(n+1)$

$$\begin{align*}
&1 + 2 + 3 + \cdots + n + (n+1) \\[1em]
&= \Bigl [ 1 + 2 + 3 + \cdots + n \Bigr ] + (n+1) \\[1em]
&= \Biggl [ \frac{n(n+1)}{2} \Biggr ] + (n+1) & \Bigl \{ \because H(n) \\[1.5em]
&= \frac{(n+1)\cdot(n+2)}{2} \\[1em]
&\therefore H(n+1)
\end{align*}$$

$\square$

## Strong Induction

- similar to induction
- assume everything below in the Induction Step
$\Biggl ( H(n_0) \land H(n_1) \land \cdots \land H(n) \Biggr ) \to H(n+1)$

### Example 1 - Show that if $n$ is an integer greater than $1$, then $n$ can be written as the product of primes

**Proof by Strong Induction**

**Induction Hypothesis:** $H(n): n = p_1^{\alpha_1} \cdot p_2^{\alpha_1} \cdots p_k^{\alpha_1}$ where $p_i$ are prime numbers, and $\alpha_i \in \mathbb{W}$ 

**Base Cases:**
- $2 = 2^1$. Therefore, $H(2) \checkmark$

- $3 = 3^1$. Therefore, $H(3) \checkmark$
- $4 = 2^2$. Therefore, $H(4) \checkmark$
- $5 = 5^1$. Therefore, $H(5) \checkmark$
- $6 = 2^1 \cdot 3^1$. Therefore, $H(6) \checkmark$

**Inductive Step:** To show $\Bigl ( H(n_0) \land H(n_1) \land \cdots \land H(n) \Bigr ) \to H(n+1)$

Consider the number $(n+1)$. Since $n+1> 1$, two cases arise.
- **Case 1:** $(n+1)$ is prime
    Here, we already have $(n+1) = (n+1)^1$.
- **Case 2:** $(n+1)$ is composite
    By definition of compositie, we can write $(n+1) = a b$ where $a, b \in \mathbb{N}$ and $a < n+1$ and $b < n+1$
    Now,
    $$\begin{align*}
    n+1 &= ab \\[1em]
    &= \underbrace{\left ( p_1^{\alpha_1} \cdot p_2^{\alpha_2} \cdots p_k^{\alpha_k} \right )}_a \cdot \underbrace{\left ( q_1^{\beta_1} \cdot q_2^{\beta_2} \cdots q_k^{\beta_k} \right )}_b & \Biggl \{ \because H(a), H(b)
    \end{align*}$$
    Therefore, $(n+1)$ can be written as a product of prime numbers.

$\square$


# Sequences and Sums

- $\langle a_0, a_1, a_2 \ldots a_n \rangle$
- $a_0 =$ first term
- $a_n =$ n-th term
- $n = $ number of terms
- sequences are always ordered

## Arithmetic Progression (AP)

$a, \quad (a + d), \quad  (a + 2d) \quad  \ldots \quad  a + (n-1) d$

- $d =$ common difference

- $\Bigl [ a + (n-1) d \Bigl ]$ is the n-th term of AP 
### Sum of first $n$ terms of AP

$$\begin{align*}
\sum_{i=1}^n a + (i-1)d \quad=\quad \sum_{i=0}^{n-1} a + id \\[1em]
&= \frac n 2 \Bigl [ 2a + (n-1)d \Bigr ] \\[2em]
&= \frac n 2 \Bigl [ \text{first term} + \text{last term}\Bigr ] \\[2em]
\end{align*}$$

## Geometric Progression (GP)

$a, \quad ar, \quad  ar^2 \quad  \ldots \quad  ar^{n-1}$

- $r =$ common ratio

- $ar^{n-1}$ is the n-th term of GP 
### Sum of first $n$ terms of GP

$$\begin{align*}
\sum_{i=1}^{n} ar^{i-1} \quad=\quad \sum_{i=0}^{n-1} ar^i \quad&=\quad a \frac{r^n - 1}{r-1} \\[2em]
\end{align*}$$

### Sum of $\infty$ terms of GP

Only when $|r| < 1$
$$\sum_{i=0}^{\infty} ar^i \quad=\quad \frac{a}{1-r}$$


## Useful Summations

$$\begin{align*}
1 + 2 + 3 + \cdots + n \quad&=\quad \frac{n(n+1)} 2 \\[2em]
1^2 + 2^2 + 3^2 + \cdots + n^2 \quad&=\quad n \cdot \frac{(n+1)} 2 \cdot \frac{(2n+1)} 3\\[1em]
&= \frac{n(n+1)(2n+1)} 6\\[2em]
1^3 + 2^3 + 3^3 + \cdots + n^3 \quad&=\quad \left [ \frac{n(n+1)} 2 \right ]^2 \\[2em]
1 + 2 + 4 + 8 + \cdots + 2^n \quad&=\quad 2^{n+1} - 1 \\[2em]
1 + 3 + 9 + 27 + \cdots + 3^n \quad&=\quad \frac{3^{n+1} - 1}2 \\[2em]
1 + \frac 1 2 + \frac 1 4 + \frac 1 8 + \cdots \infty \text{ terms} \quad&=\quad 2 \\[2em]
1 + \frac 1 2 + \frac 1 3 + \frac 1 4 + \cdots \frac 1 n \quad&\approx\quad \log_e n \\[2em]
\end{align*}$$

# Graphs

$G = (V, E)$
- V: vertices
- E: edges
- G: graph

<img src="https://lh6.googleusercontent.com/dr_pOn_-ss55n_ERtumqkDMPbK1XsCWmo2YPauSs2I3jrXCimT76ivAsC-BXZirkUPfc05kZBUMQp6XrWF3MnKTRsD3VNx5nuRf6wpevMAHRvkeN5SiKgdpkLi7rTcD5ri2eoD4LJu9KTibvOg7BIzU" width=400/>

## Types of graphs

Type | edges? | self-loops? | multi-edges? | V vs E | example
|--|--|--|--|--|--|
**Simple** | undirected | No | No | $$0 \leq e \leq \dfrac{v(v-1)}2$$ | **![](https://lh3.googleusercontent.com/41wlivLW6xevQXePqHJrCJCVceNjoA9Fw6Kf4_Zqayy1PU8sTXkAA00LLXUD2-slG5tP1YzXkVvRoG_q4EBzii6asAqvFV_Jn34SnaMmZrmmSOEegibPka-i3o_LBpg495xY-e30m64mPBSj2Uo0chI)**
**Simple Directed** | directed | No | No | $$0 \leq e \leq v(v-1)$$ | **![](https://lh5.googleusercontent.com/Ql_8bCvlZx5RX5NUZKc1FYlq8aJu94er68UnUqjy9YZaQZyhSUUOcxuDXOtg4RLXXjCio4V6DMSbDabbFw1ByweGEo4Bq-QaGMwaC4SuYjMmzjES8oTsaghM93WuzeX4kjhcaUH3Y5CMRPCOzeUoSSU)**
Multi | undirected | No | Yes | $$0 \leq e \leq \infty$$ | **![](https://lh3.googleusercontent.com/Z8Rv6gDHVLrtiVdFFqDFqI7Knm2IZZQMUR3Pr33xKG-JaQjrmGSLNTU2rn7Tr2xjZ65LWf-gGO_oo6CuPHvCaunYFyEPECW_UFu5VD1xCDSEabdIAyQ5sRwfq3dLzNVgWpHCScDtrmetiOyRS_EU94A)**
Multi Directred | directed | Yes | Yes | $$0 \leq e \leq \infty$$ | **![](https://lh3.googleusercontent.com/OkfnxUPzFElMEtmWSD4F7R5QU-6RAMpTzXRJ9UXm4SqrzcNoujFZHfgCTCGYDt6X2lQVphhZbAoo3i0iR9WGxqRPRkE0UbDCF4laOHjq38NhWZLa6K_aBirvRrRcW4rGHZRG9FdBY7LEPlaALDTuT4w)**
Pseudo | undirected | Yes | Yes | $$0 \leq e \leq \dfrac{v(v+1)}2$$ | **![](https://lh3.googleusercontent.com/ADYUWyJ2x-VDdpyCKcfh59Xuh0pWYdnOc7L-TTH9qqEH4IZ74TNoaFgZeg2mHcbw1Bsrwhsg0sVu_zyVuaY1mmVfZSl9A_ViYohMqLYKVpTfYQTzR_8TvMhBV_4ain5zLGTvf2g5OSvhleXLQ1t4pX4)**
Mixed | directed + undirected | Yes | Yes | $$0 \leq e \leq \infty$$


- If the edges have weights associated with them, then we call it a weighted graph (weighted simple undirected, weighted simple directed, weighted mixed, ...)

## Basic Graph Definitions
| | | | 
|--|--|--|
Adjacent Vertices / Neighbors | in undirected graph, vertices $a$ and $b$ are adjacent if they're connected by an edge | ![Graphs and Trees](https://lecture.yangxinmtsu.repl.co/3080/images/adjacentVertex.png)
Incident | edge $e$ is incident on vertices $a$ and $b$ if it connects them | **![](https://lh4.googleusercontent.com/p5rT0_XDnTybf88yvWuVd7oRVQmp5PDoahs4x6xhv1nAXNl7uIqk0f8tZ4inMb7Ow4FptrPNhTh94b5vV0S9HXj-IE8bV-OIdZLsu52bN8ZM4_6RPn0MiySy2wTE9jH-qPyit40ttKXzuhlkHatO_L0)**
Adjacency / Neighborhood | $\text{Neighborhood}(a) =$ the set of all vertices that are adjancent to $a$
Degree <br/> $\text{deg}(v_i)$ | in undirected graphs, $\text{degree}(a) =$ number of vertices adjancent to it. <br/>self-loops count as 2 degree for undirected.
In-Degree <br/> $\text{deg}^-(v_i)$ | in directed graphs, $\text{in-degree}(a) =$ number of incoming edges<br/>self-loops provide both 1 in-degree and 1 out-degree (total contribution of 2)
Out-Degree <br/> $\text{deg}^+(v_i)$| in directed graphs, $\text{out-degree}(a) =$ number of outgoing edges<br/>self-loops provide both 1 in-degree and 1 out-degree (total contribution of 2)
Degree Sequence | sequence of degrees of the graph | **![](https://lh5.googleusercontent.com/ySoA11-xkHBA1gUfVofqC6P5RNNloLLZEVqUwbgGNeMZGyVBxEaKmdwS7MFEjBHrBDQz4WhhlzEMZ1uvHZGYj_-l5cpU1wfOUuaSQRjr1n4OAGfX8gkF9ghptpbivwpoPpbc09oNgD3ZUn5qYa7FLt8)**
Isolated Vertex | vertex with degree 0
Pendant Vertex | vertex with degree 1
Initial / Start Vertex | For a directed edge $(a, b)$ from $a$ to $b$, the initial vertex is $a$
Terminal / End Vertex | For a directed edge $(a, b)$ from $a$ to $b$, the initial vertex is $b$

## Basic Graph Theorems

| | |
|--|--|
Handshaking Theorem | For any undirected graph $G = (V, E)$, with $e$ edges, $$2e = \sum_{v_i \in V} \text{degree}(v_i)$$ This applies even for multi-edges and self loops. <br/> Self loops count as 2 degree
Collolary 1 |  An undirected graph has an even number of vertices of odd degree.
Directed Handshaking Theorem | For any directed graph $G = (V, E)$, with $e$ edges, $$e = \sum_{v_i \in V} \text{in-degree}(v_i) = \sum_{v_i \in V} \text{out-degree}(v_i)$$ This applies even for multi-edges and self loops. <br/> Self loops count as 2 degree


## Special Graphs

| Type | Meaning | Examples | Property
|--|--|--|--|
Complete Graph<br> $K_n$ | Simple undirected graph with all possible edges | **![](https://lh3.googleusercontent.com/lLphPLELKRC2qKP73syR44K-ZIfcRuA_M3xCp5eF-XAgaSNzvkPbIwL4frk05KgObkGf7hobZmTMlj1PlZ6FZDGixy2MF8YvJ2QBXt-I43RAxIz9dwNM2ywkaeSMadrFeaZy8lL1cnl1VEACP-uWeWg)**<br/>**![](https://lh5.googleusercontent.com/MFxNSzUcPRuqSfd3DSp3IqXeEhBCfgO1EMt5B_r3rT7qA3LyhTiD0q0jdqwU61kU4_zZQA38XduPPvoC5whVdgCqdCa57R-wy91hwRZejnjI4zUArzL_0oDZSrAdhEWxuOVzeDq0V2QkD2ekrVsER1k)** | $v = n$ <br/> $$e = \dfrac{n(n-1)}{2}$$
Cycle <br/> $C_n$ | a closed loop | **![](https://lh3.googleusercontent.com/NOVQg40wAd6km0RfUnI-L-kJ0BbJ_bIgjMFgezLr6oAie7Mc0fbw60kfp3hMUqj2w6x5OFdxdSk803OS5X2s4fYQltQOTR_TEZ2NYuWmO8Utog-gnoijRGM3HpYYNoEuQmmXP5xzcR2sL-Eib8IW5Vg)** | $v = n$ <br/> $e = n$
Wheel <br/> $W_n$ | add a center vertex to the cycle and add spokes | **![](https://lh4.googleusercontent.com/hG9oHsBIdwr5lmN-8EcIRYMxwPLrEAdI3yvNKDE_QlfwXDoI1pD64x9-CX5CxGPDCglhcNlfeEAAVIl2jDuuLmpFKO6ezrQP4M0PLNQvm4hyKQ5Laet0EHF3V3PQYHx_K4nTrxC5QwAiFLibTm6Qfo4)** | $v = n+1$ <br/> $e = 2n$
Hypercube (n-cube) <br/> $Q_n$ | n-dimensional hypercube | **![](https://lh5.googleusercontent.com/T1ekQhlM9dDNFQL7mW8pBtY2KamVevCCSFO2rhQ8sAKOtevANuHB2j-yVBieQ_27xa6GnZiSoxgKepQgY7VyBlQNvZBCZ0twQDMLMFCruXaZG3HctV37WAVkAiIHBxubTfuEp6FjQOKBJscfZ5Codf0)** <br/>![](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Hypercubestar.svg/400px-Hypercubestar.svg.png) | $v = 2^n$ <br/> $e = n \cdot 2^{n-1}$ 


## Bi-partite Graphs

- vertex set $V$ can be partitioned into two disjoint sets $V_1$ and $V_2$ such that there are no internal edges inside $V_1$ or inside $V_2$
<img  width=300 src="https://lh4.googleusercontent.com/6zTt2X3SGu9NMSR4q90qLVEAAyDtvxNf8cdYCyWiWNAeb64ivJ_62EZOF1QOpaDQCXqSqSdGofdmqNU-5kImhSdQZDEkGxyVVfyiyHuT5-xpWvf27aEDZVswGWQAD1e2LjSyiXEITiQdK5jkQiw4czY">

**Complete Bi-Partitle Graph** has all possible edges from $V_1$ to $V_2$
**![](https://lh3.googleusercontent.com/r9K-MnWkhwFyPL0dgsaOGFgsWkw9502u3_fraZKbUqGNkoXcH6JNJf4Yn5M3dj335X3K8K1PLo296A2XaPDQDu8Wigf2CnkhbfXgiepdg2KIrXZxjmRr8a1ZGiMMmZS6ZH5kNivY0Mco8FFNXHJ94bI)**

**Theorem:** A simple graph is bipartite if and only if it is possible to assign one of two different colors to each vertex of the graph so that no two adjacent vertices are assigned the same color.

## Matching

definition: Matching $M$ in a simple graph $G = (V, E)$ is a subset of the set $E$ of edges of the graph such that no two edges are incident with the same vertex. In other words, a matching is a subset of edges such that if ${s, t}$ and ${u, v}$ are distinct edges of the matching

Rules of Matching
- think of it like marriages b/w boys and girls
- 1 boy cannot marry multiple girls, and 1 girl cannot marry muktiple boys (no polygamy)
- Some boy / girl can remain un-married

**![](https://lh3.googleusercontent.com/-EMXVuThlcs_cp_tmzBJtCYPdVAlAWly3BXRZlQV2L60yEzNQi1xWo5psTQjvlqlDQbBF98Di4HiabvSQOxglOdBBdCCFbJbr6MJBCKW8l8VUxO93fRVr-TWzxBnzPpH0YM9Lig5fWiCZIGqWmz70YI)**

Matching can also be in a non-biartite graph 

<img  width=300 src="https://lh4.googleusercontent.com/gn52pD4FvRbeNUlVZsjO_k4jVeqDdkcktHNlO_Tu585PiXNMxJj7LvYVBAX0BryLx7qmA8_RVR6FxeFzG_k-NuT4HIvC__W1qXGBJfQ5yLuWu_iCDgC0YQNp1dWbqehx_beig8f2ClO3V40VBIoUA4w">

| | | |
|--|--|--|
Matched vertex | got married to someone
Unmatched vertex | left unmarried
Complete/Perfect Matching | every boy got married (some girls might remain unmarried)
Maximum Matching | we have maximized the number of marriages | **![](https://lh6.googleusercontent.com/y7QhIfc_nfy7_cKPYAwrsedlnXeQx6kJl728A58pM8XJ5nJPyoEKjAIaD02nuUFcm9N0iQu_yV20LP7aYGVBKHK0U_sCAbLbM7zeETuoUpReXhIgF0I1hd8YnytSKWHuIDX-a1gJ2UpmNWGFo-hAK3k)**
Maximal Matching | we can't add more marriages | **![](https://lh5.googleusercontent.com/S53ljFH4HyEJAJFlHaPr1ICFDKj-5fNdI-3jHSWiV5L6UQGwWvcn1neJphfrF3piDll2QEFfO2xclaNTd4lgSGUN_ZwYSQM0f1HpRz7_rjkw6Hck--ab8xQ_A5Z6VejCe2_hXZJ67v3lnJnKBKBXz3o)**

### Hall’s Marriage Theorem
The bipartite graph $G = (V, E)$ with bipartition $(V_1, V_2)$ has a complete matching from $V_1$ to $V_2$ if and only if $|N(A)| \geq |A|$ for all subsets $A \subset V_1$.

## Subgraphs
A subgraph of a graph $G = (V, E)$ is a graph $H = (W, F)$, where $W \subseteq V$ and $F \subseteq E$. 

<img  width=500 src="https://lh3.googleusercontent.com/F6Hx_WXLc3nHYKraS9bHdc3f6uQgwbgpGA-vqj7bwavvnhYOD3U2IKEHwDhSwEz-h5Z7IcNgL3bFf2jAhrFkD_juzGtryRw5-jATqErCZ-X0Dp9NtcM428mEOmipF2Hqi-640qSMQcCc5kbiZN6s2Ds">

**Proper Subgraph:** A subgraph $H$ of $G$ is a proper subgraph of $G$ if $H \neq G$

### Induced Graph
The subgraph induced by a subset $W$ of the vertex set $V$ is the graph $(W, F)$, where the edge set $F$ contains an edge in $E$ if and only if both endpoints of this edge are in $W$.


### Graph Union

The union of two simple graphs $G_1 = (V_1, E_1)$ and $G_2 = (V_2, E_2)$ is the simple graph with vertexset $V_1 \cup V_2$ and edge set $E_1 \cup E_2$. The union of $G_1$ and $G_2$ is denoted by $G_1 \cup G_2$
**![](https://lh5.googleusercontent.com/tVF9KJYwN8ZrwYHmiyDyFtS9O-ErTUB-bDzLqq6_b45jZ-x8HLRQiwNe3J5QKsVuTZdfSQomeln-35hzJ59wC-IboX0lwopApb5QjN_DVZf94usZnKuvbIUKbktYWSaELthebm54TRmlzlmhVwQfxes)**

## Adjacency List Representation

- Prefered for Sparse Graphs
- checking adjacency of 2 vertices is expensive: $\mathcal{O}(v)$
- is space efficient: $\mathcal{O}(v + e)$

#### Undirected
**![](https://lh6.googleusercontent.com/gUHJrrvGPrHBmpCqsYqrPWKR3OHrq4LoQFEBISey2OQaiwNZZs3dmekdGInsSQAD3lWPocQAgkoCu97gxpL9YRVbTOodkMCppowJe4SXnHIIplbg4XR2dWyz3nsu3Pna320HkUVz1XJvd4guYIXupxQ)**

#### Directed
**![](https://lh5.googleusercontent.com/WjugvGRld5KkWxdecWeNMqeFIn_-WXLmbcKCchC9hRwyMFcNtHJqJF2XiGFfJ4W20MG4GMuBOS4z38kOxQk5Fax0ekcqB91Upo6nkUQeViGqk76Tyi0GRvVzNRJAm1HnEVef5l7V7OnXYlDwptdWVqY)**
## Adjacency Matrix Representation
- Prefered for Dense Graphs
- checking adjacency of 2 vertices is fast: $\mathcal{O}(1)$
- takes a lot of space: $\mathcal{O}(v^2)$


#### Undirected
- Adjacency matrix is always symmetric for undirected graphs
- Diagonal is always zero for simple graphs (because no self loops)
<img  width=500 src="https://lh3.googleusercontent.com/tqPfVQm_UKhp2bsGaDsiwIkx352HtbH94yDvRAgNQBBiTzhQR91N6oCUr-726dbIOGR9_h47xw7W8eYxINoPIfuOoi0dBL3nnad4jFGlCvN0ja-uSQ5x0XNfklwbQWsDJOqxPVh5HvcM2ARjCDU7VUw">

<img  width=500 src="https://lh6.googleusercontent.com/z0934ocTCECNxY5EABV8gcN9ietzqVKstYhrrGE9OeXprCLUmdY9lzpNWXOb8MyYyURC9Nul-aSa0CJ6RG26ttFHVaPS0eoP-n2AuIVuMeRWbAOeLijlf-TivhEVHAthGXFlO8PFoo3RR48vtoBU2xU">

<img  width=500 src="https://lh4.googleusercontent.com/N6FGKzvC-_Sgv-xkJjOPSrf3Ry9LPSaV9PYrKls03NpRnc8rsrXDXu3oetwY9b_0_zQGlFOaA15mo0TLb_EfA1I_VRScXX_IJJHJkpK4h6TsVHmRO7OHT24alp-byvsyLvEAnxAT1Y_x0SGjYiqnZkE">

## Incidence Matrix Representation
- useful for multi-graphs
- represents which edges are inceident on which vertices

**![](https://lh4.googleusercontent.com/CpsLe2b-ojASwKnfP0c5bzB2vgjUu8b4fKNSxBEwegCKqO8cTrxUUNJwXa2TFCDsQNXjvvd8K3-cwQskDRWxKjXjR7VCIZspCWNmcxxse_qinTIKJYfF-BO4mWrjBHJCNnCCXMAgMI9Yd0XOoL_pSVM)**
**![](https://lh3.googleusercontent.com/flfdC1FBOxnrQfvZbwbfeKGsQzw2AhMxzo2LdjtqDL8r6pxsUoyHqXAEjGb9ZjIi1Hv5Ho12bqw3zYxsBHrr5Ks-LahFDLPfmX1LwLiuFb33Hhoa8S-8ctm3YnM2BPDy-k4-etpRCVUv4ScwBj-uaVM)**

## Graph Isomorphism

- two graphs are isomorphic if they can be re-drawn to look the same
	- The simple graphs $G_1 = (V_1, E_1)$ and $G_2 = (V_2, E_2)$ are isomorphic if there exists a one-to-one and onto function $f: V_1 \to V_2$ with the property that $a$ and $b$ are adjacent in $G_1$ if and only if $f(a)$ and $f(b)$ are adjacent in $G_2$, for all $a, b \in V_1$.
	- Such a function $f$ is called an **isomorphism**.
- Two simple graphs that are not isomorphic are called **nonisomorphic**.

| Example | |
|--|--|
**![](https://lh4.googleusercontent.com/mmC7HqhaKyhFezlAGxMoawNtklSpwtjCHzieh5JMxRBhc9bz_BDlbafBAtcxurGx3quFEIGOJHJ-frpvvsA5T-pX7ImIXghCCqFwdSRqUXZPMDTlPylSa-lEKhSl8KkVvmbQe6KbxGsrie6IE6KPlpk)**| **![](https://lh5.googleusercontent.com/-Hh0BfA6HEDVcXS2T4tFT2s1E8LdOPt0j797-JjoQ-OyRvJff7gGyq5_vBEV03PW4GTAp5T09bxs85KP_lPID0ypx1gzQJBjNl5DdblzQjvVIHs_VpZZrbCzdtdFThBV5EonFkhhEpxa7uHw4CoODDw)**


## Graph Connectivity - basic definitions

| | | |
|--|--|--|
**Path** | A path $p = v \overset{*}\to u$ of length $n$ from $u$ to $v$ in $G$ is a sequence of $n$ edges $e_1, \ldots ,e_n$ such that there exists a sequence $x_0 = u,x_1, \ldots, x_{n−1},x_n = v$ of vertices such that $e_i$ has the endpoints $x_{i−1}$ and $x_i$.
**Simple Path** | path which  does not contain the same edge more than once.
**Circuit** | The path is a circuit if it begins and ends at the same vertex, that is, if $u = v$, and has length greater than zero
**Simple Circuit** | circuit which does not contain the same edge more than once.
**Connected Graph** | An undirected graph is called connected if there is a path between every pair of distinct vertices of the graph. | **![](https://lh4.googleusercontent.com/qqF595YV4eDvki-K5HHVXx7wKq7pQ7IEtesHMDPFTe7TRTFwCnRo9vEtB86LhGYEcW8Osn6DJZ6F6ompnlqOGeRkLMy2m2dGE-zQK_kDarCjdkDc38tf5KSWSZH4OUB9ROC5huDLCJpo-yR1pmjJBAg)**
**Disconnected Graph** | An undirected graph that is not connected is called disconnected. | **![](https://lh6.googleusercontent.com/zCG8sqAxLlZBPFelLRuRzThIoif4V5iqclY6Lk5JB1edCFhfnSbtq8Rpyqaq2689PkEavnxinYNLfFMMCtZHH8I04Qc_GOFLVVwjET6RDIR5duEJSmBj2m_jPf6QQ0pdAK4Bp8KZLGOKZyk9SE8_oOs)**
**Strongly Connected Graph** | there is a path $a \overset * \to b$ and a path $b \overset * \to a$ for all vertices $a, b \in V$ | **![](https://lh4.googleusercontent.com/Li8FWf2d4dmUj4h8ubYguLpMM5uMXraCY1pkl8YCtNDfYHVaMtlG47_DuCDrhC3B_fMY-rl_WuPJZjZ4-p6C213V6_-VA4JwbODAqIn7zeRoQ6oam_bkkdl0TwVuounwdXg6hD6wpN1krXbjsCaJyOU)**
**Weakly Connected Graph** | A directed graph is weakly connected if the underlying undirected graph is connected

**Theorem:** There is a simple path between every pair of distinct vertices of a connected undirected graph.



## Graph Connectivity - measures

| | | |
|--|--|--|
**Connected Components** | a subgraph which is connected  | **![](https://lh6.googleusercontent.com/bqquBznG_mrkU0b9OLbBBtK55lLL0VkmmamV8nA9CQz6f8EHU2Ox8pNr57MkkqkpANkHgvVIhbS2os7NbVINRRUz8K8jOTARyDWHMJ8Jb4CMU0_r0Zyklw8_MDxtlg2tIHYwKsi8oPknrZJxEFz51iw)**
**Strongly Connected Components** | there is a path $a \overset * \to b$ and a path $b \overset * \to a$ for all vertices $a, b \in V$ | **![](https://lh5.googleusercontent.com/VChuh9k0U60xj07JUKtvkc94Im88-v3GHSnoQWjqyug8aKRaQO4cKA4IjfcCSGCpzvsdlHVPWIppvXOTXG-323ngXth528qEHTNfBu7Ty2E_BmDJW69bu2JyqG4lCxcyzMV9EFBA5HicLKZpusAQyTk)**
**Cut Vertex / Articulation Point** | vertex which when removed makes a connected graph disconnected | ![Articulation Points (or Cut Vertices) in a Graph - GeeksforGeeks](https://media.geeksforgeeks.org/wp-content/uploads/20230801121912/rem_finaldrawio.png)
**Vertex Cut** | set of vertices, which on removal make the connected graph disconnected |
**Cut Edge / Bridge** | edge which when removed makes a connected graph disconnected | ![Bridge (graph theory) - Wikipedia](https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Graph_cut_edges.svg/1200px-Graph_cut_edges.svg.png)
**Edge Cut** | set of edges which on removal make a connected graph disconnected | 
**Non-Separable Graph** | graph with no cut-vertex |
**Vertex Connectivity:** <br/>$\kappa(G)$ |  $\kappa(G)$ is the minimum number of vertices that you need to remove to make the graph disconnected or to make the get a graph with a single vertex
**Edge Connectivity:** <br/>$\lambda(G)$ |  $\lambda(G)$ is the minimum number of edges that you need to remove to make the graph disconnected

### Relation b/w Edge and Vertex Connectivity

$$\kappa (G) \leq \lambda (G) \leq \min_{v \in V} \text{deg}(v)$$

## Euler Paths & Circuits

| | | |
|--|--|--|
**Euler path** |simple path containing every edge of $G$ <br/> $\bullet$  repeating vertices is allowed <br/> $\bullet$ repeating edges is not allowed | ![This image shows the algorithm how to determine that a network is Euler trail or circuit. Ask your teacher for more information.](https://jsx-images.mathspace.co/vce-12-general-1160-chapter-8/8.06-1.svg?versionId=8YcXYTOYwXw7KkQ9WS.UYJySgonUuoyr)
**Euler Circuit** | Euler path which has same start and end vertex <br/> (closed loop) | same as above - start from any vertex

### Necessary & Sufficient Conditions:
- **Euler Circuit**: all vertices must have even degree
- **Euler Path but not circuit**: exactly 2 vertices with odd degree

## Hamiltonian Paths & Circuits

| | | |
|--|--|--|
**Hamiltonian path** | simple path that passes through every vertex exactly once <br/> $\bullet$  repeating vertices is not allowed <br/> $\bullet$ repeating edges is not allowed | ![Three networks with Hamiltonian path, Hamiltonian cycle, and with no Hamiltonian path. Ask your teacher for more information.](https://jsx-images.mathspace.co/ac-11-essentials-813-chapter-13/13.025-1.svg?versionId=g7Uervr4vG9drGRZm1HzlEFTU8sMpSxF)
**Hamiltonian Circuit** | Hamiltonian path which has same start and end vertex <br/> Note: only the start/end vertex is repeated

### Necessary & Sufficient Conditions:
Not known
### Sufficient Conditions
-  if any condition matches, a Hamiltonian path exists. But it is not necessary that every graph with a Hamiltonian path must satisfy these conditions
	- **Dirac's Theorem:** If $G$ is a simple graph with $n$ vertices with $n \geq 3$ such that the degree of every vertex in $G$ is at least $n∕2$, then $G$ has a Hamilton circuit.
	- **Ore's Theorem:** If $G$ is a simple graph with $n$ vertices with $n \geq 3$ such that $\text{deg}(u) + \text{deg}(v) \geq n$ for every pair of nonadjacent vertices $u$ and $v$ in $G$, then $G$ has a Hamilton circuit.

## Planar Graphs

- A graph is called planar if it can be drawn in the plane without any edges crossing
- otherwise, non-planar

| | |
|--|--|
**![](https://lh6.googleusercontent.com/OYdNY3DpEBSxrX9zYRUhXSVFXcR8ADeIHcu_e44U_yoew2F1cg0MDEugpjBZx6UUdHAurvzOcf7IxBa2pI49hM1zZjWpSxO_1u1UcF8DPhFmZY9jsqDqNcnsJBI1_fR4syEpwCrgWypJUusKteuyjx0)** | **![](https://lh5.googleusercontent.com/RhgKgK-64wu1y7em9Zc4UA9VFdVPIZjaYgbQa5fj-WvNLf_033KAHkusnBTsAeugAuNq0arMPghMFj92T0IO6i-CmNO-RK_o8AwyQvaQ9VEfmu0AxRJ1O3V9WRe-_zJK3qsNe0ffl6e9hLWVxgtQHNI)**

### Minimal Non-Planar graphs
| Min Vertices: $K_5$ | Min Edges: $K_{3, 3}$
|--|--|
**![](https://lh3.googleusercontent.com/GfmOWcmi-8d0_fSsC5hmcZHfWyLtjg16ZqvSoi3xv9EDFcp6nKRPNYBaG3gq2hOn_cZP7imEU1KDB1cI3k3fWseE_Tp2XHUN_uKAusIhoAxwdFGGxlWTJtZi-bZTEv5jHupjS3xXJu0DCfn8TqaX9iA)** | **![](https://lh6.googleusercontent.com/3G-AZSPPlovO8Iqw4FYIucSotWtZnn4tb0LuZzJPpZiLOfEbgoYHHuHjIvF6VaIBilszoZvJuClxM6mlhWoAq0tdp6MWZ_1nnDbvo_gFb8gw1lw7thH08ElaM27JLjlzSbXThT2v1vM_CeoNDHGOOKw)**

## Euler's Formula for Planar graphs

#### Connected
$$r = e − v + 2$$
- $r$ is the number of regions / faces
- $e$ is the number of edges
- $v$ is the number of vertices

#### General
$$r = e − v + k + 1$$
- $k$ is the number of connected components

### Corrolary 1
For connected planar simple graph with more than 3 vertices, $e \leq 3v − 6$
### Corrolary 2
A connected planar simple graph has a vertex of degree not exceeding five.

### Corrolary 3
If a connected planar simple graph has $e$ edges and $v$ vertices with $v \geq 3$ and no circuits of length three, then $e \leq 2v − 4$

### Kuratowski’s Theorem
A graph is nonplanar if and only if it contains a subgraph homeomorphic to $K_{3,3}$ or $K_5$.

**![](https://lh4.googleusercontent.com/LXnbofHpSgB6ILI9kipDSDYYQjtdiTvAwX_bkwPOtkVQ-W2L57sjofclgBblvJdO7x-MTK4z8Y1zyvVlsOVr9bpcoIhL-sYkkIQ8C3pgJxbZuHGUEYSdlPS48d1jw2RmT-OqsVbJ-RQ7d_NTNZOxJg8)**
**![](https://lh4.googleusercontent.com/MVrLdTzectENEBHoZqwbicG5WKGlvqScnodMned6a1ni12cpA6qFSUjWeyDjDNyvXmXZttmFzCsousPX-PZ3pdYGdjQL4ToBhVO6CiZKYldrqdTzLCYzkdOFv5doDCu_UTKuma71RQMZ4m2LK_XOvbY)**

## Graph Coloring

- **Coloring** of a simple graph: color each vertex so that no two adjacent vertices are assigned the same color
- **Chromatic number** $\chi(G)$:  least number of colors needed for a coloring of this graph


## 4 color theorem

The chromatic number of a planar graph is no greater than four.

- all planar graphs have $\chi(G) \leq 4$
- non-planar graph can have $\chi(G) \leq 4$ - example, all bipartite graphs have $\chi(G) = 2$ irrespective of whether they're planar or not

# Trees

- A tree is a connected undirected graph with no simple circuits (no cycles)
- A tree is a connected, acyclic graph

<img  width=400 src="https://lh3.googleusercontent.com/lhcmVXz4sm08Gi_XzQK0MRkMDJOiD7qcofEzZwESKlK-0u6X6Pt962fMd3bnjXncAYQgaQqtEH1bILEMSY3qcw7r3L9Vinrnyl890A5bdYtgV-rzNbijZ3NE_EbD9hlyrZCMNC9pHjvbEjurkO-dH7o">

### Theorem
An undirected graph is a tree if and only if there is a unique simple path between any two of its vertices.

### Forest
a graph with many disconnected trees
**![](https://lh6.googleusercontent.com/BbLWuIazQu2Y-fEfh7fSaGyk51YKHdk0YqMPROF113BKl5W0UtywlnOfGcalgEn5afOAgay3UKr-GbPth3r1fae4TrO3GRE-5SrP8Zh3h8DZs90SEMgM6KtjV-STNTczSPzws53_z80TreRdsQXwRdE)**

## Rooted Tree
A rooted tree is a tree in which one vertex has been designated as the root and every edge is directed away from the root.
**![](https://lh6.googleusercontent.com/8L-Cocy2qeKjVESxVQVInn8kP3g7jeBugyJJMC3hryyBwrXry4Hf5iethikSem3pAmqp-MgbRGRr4vTX5mYsmTGimq7ML7P-vL-I_WRbbAyU0QKzSSMhLPbHvBdBO1s74gEiklORUURyWQ43OV-pocE)**

| | | |
|--|--|--|
Root | Top vertex of a rooted tree |
Internal Vertex |  vertex which has children <br/>(includes root if the root has children) |
Leaf Vertex | vertex with no children <br/>(doesn't have to be at the bottom - can be present at a higher level)

**![](https://lh6.googleusercontent.com/Vmup940PmIZBIeJ1GaQWbebg9pUButTZ9xTfs21NBhyeOVOEFDWWtwtsM02lv9dT8AiWmcyiFhZSta1NhdLUsUcBvhjiYNvS4XdKBFBwxJg5koMDLZLUSoXdLas6Ym7M0EN7wr3r7mGEGWYx00zacFw)**

<img  width=300 src="https://lh3.googleusercontent.com/CTIsivG8gK4ymmQQY_IPF-9ms7oHWZSIfsHo7MwLY5YG1_2vUTdoYrtY52xhWKvZgECOSG-Af3smzTKH0eQ-WQ1k2KXI7MrSFBP-_cO7slfSUsLyyfR2_KmYhL8PIOSCTnu1kJZmfNgxe-kGBM-fV6Q">

## $m-$ary tree & full m-ary tree

- **$m-$ary:** A rooted tree is called an $m$-ary tree if every internal vertex has no more than $m$ children.
	- **Binary tree:** $m = 2$
	- **Ternary tree:** $m = 3$
- **full $m-$ary:**  The tree is called a full m-ary tree if every internal vertex has exactly m children.

**![](https://lh6.googleusercontent.com/ouqZKIMABD3bOFdPQTPcHyWl_YsCxszWtMXYVjC1uni6BvtOn6CETu9roSLUCpL8i_B6TFesxaaA0eHUWC-PhPAGII09P5fIBLCeK5DWOiaQzo9scrFY9xW2-l92g-e9EXMpF1vINWYatrjiQJg2z0E)**

## Tree properties

- A tree with $n$ vertices has $n − 1$ edges.

- A full $m-$ary tree with $i$ internal vertices contains $n = mi + 1$ vertices.
- A full $m-$ary tree with
	- $n$ vertices has $i = \frac{n − 1}m$ internal vertices and $l = \frac{(m − 1) \cdot n + 1}m$ leaves
		> <sub>each vertex except the root has a parent, and each parent has exactly $m$ children</sub>
	- $i$ internal vertices has $n = mi + 1$ vertices and $l = (m − 1)\cdot i + 1$ leaves
		> <sub>each internal vertex has $m$ children, and there is also a root</sub>
	- $l$ leaves has $n = \frac{ml − 1}{m − 1}$ vertices and $i = \frac{l − 1}{m − 1}$ internal vertices
		> <sub>$l \text{ leaves } + \frac lm \text{ parents }  + \frac l{m^2} \text{ grandparents} + \cdots + 1 \text{ root}$</sub>

## Spanning Trees
- Tree containing all vertices of the graph

**![](https://lh3.googleusercontent.com/pCN_rWqEIKI1mhx9cE67yRiJ3aoqxew7i2JIhbJedOBSEXtzrlbHqr1V0Pf3d-9GiTFXwCWrGS4DDQZZ_N1RouhmgJqii7bTwVAKrNBkRdT6zlHEIK-2oe7_so7Sxm5CSrv9MOay6IJqMZs9d8VlFpY)**

- All possible spanning trees for graph G have the same number of edges and vertices.
- Spanning trees do not have any cycles.
- A Spanning tree is a minimally connected sub-graph, which means if we remove any edge from the spanning tree then it becomes disconnected.
- A Spanning tree is a maximally acyclic sub-graph, which means if we add an edge to the spanning tree then it becomes cyclic.
- A connected graph G can have more than one spanning tree.


-   A  Spanning tree  always contains  $n-1$  edges, where $n$ is the total number of vertices in the graph  $G$.
-   The total number of spanning trees that a complete graph of n vertices can have is $n^{n-2}$.
-   We can construct a spanning tree by removing atmost  $e-n+1$  edges from a complete graph  $G$

#### Theorem
A simple graph is connected if and only if it has a spanning tree.


## Minimum Spanning Tree

- A minimum spanning tree in a connected weighted graph is a spanning tree that has the smallest possible sum of weights of its edges.

**![](https://lh6.googleusercontent.com/1cCI7Ox2qI-W8wU-brvVXXYcE8zw02107WTxA_RmixjRfAnTdRJJvU3sRMlhw3ZbR9fzLOxCTV6v_9ZmBssoXKzfARvaZyyU03g3aNEwN5P1MG7_GMljQARUu1oH9_AXBT-T2cvmYH7PSeVJvA-WaBo)**


# Kruskal’s Algorithm for MST
1. Sort all the edges of the graph in the increasing order of their weight.
2. Pick the edge with the smallest weight.
3. Check if it forms a cycle with the spanning tree formed so far.
4. Include the current edge if it does not form any cycle.
	Otherwise discard it.
5. Repeat step #3 until there $v-1$ edges in the spanning tree

**![](https://lh4.googleusercontent.com/Ldg4JDB7PJoweRjLns9EskwxSxE3Sfd3-OUmDOAnmD3H7Hbzq0jaq8BnFaHdLOvDQKcwwWuP-ml06RvJwyqTZQBP1IW9Skp2rd8d5Zuw0itGeagIgheJpR0qugfmymZCcIQoBFJV1rgvbsucY__doT0)**

## Prim's Algorithm for MST
1. Select a starting vertex.
2. Select an edge $e$ connecting the tree vertex and fringe vertex that has minimum weight. Fringe vertices are the vertices adjacent to visited vertices but not yet visited.
3. Add the selected edge and the vertex to the minimum spanning tree $T$
4. Repeat step #2 and step #3 until the vertices adjacent to the visited vertex are unvisited.


**![](https://lh3.googleusercontent.com/Mr8eGmN_1XK6XEbeOBDNuXR2RjG0WWXukFwBk1wu_9uHDzKECU8tWAiuzIca7-8__Appti8sL08WU19UY0cE4CMBPjRndI8MZhicdO6H55O3Ujm9nqkVxxFyl-IKSi6Ovcz2VSXE4F6-m0QXgPDuJ4Y)**
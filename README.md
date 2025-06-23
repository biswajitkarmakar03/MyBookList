# MyBookList

A personal library and wishlist tracker web application built to help users manage books they’ve read or want to read.

![image alt](https://github.com/biswajitkarmakar03/MyBookList/blob/ead39f1c5be391676c8b6c487b30c68cff250d5a/screencapture-127-0-0-1-5500-index-html-2025-06-24-02_17_05.png)

### Features

- ✅ **Library management** – add, edit, remove books you've finished or own.
- 🌟 **Wishlist** – keep track of books you'd like to get.
- 📚 **Wishlist → Library flow** – easily move books from wishlist to your library.
- 📊 **Reading stats** – simple visualization of your reading habits.
- 🔔 **(Coming Soon)** price alerts, book recommendations, and community features.

---

### Installation Steps

```bash
git clone https://github.com/biswajitkarmakar03/MyBookList.git
cd MyBookList
stack setup                # or `cabal sandbox init`
stack build                # or `cabal install --only-dependencies`
stack exec mybooklist -- --port 3000



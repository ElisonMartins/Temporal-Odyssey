const useIPFS = (hash, filename) => {
return `https://cloudflare-ipfs.com/ipfs/${hash}?filename=${filename}`
};

export default useIPFS;

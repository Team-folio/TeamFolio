import React from "react";

import { FaChevronUp, FaChevronDown } from "react-icons/fa6";

const Card = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-between">
      <div className="bg-white shadow-md p-4 rounded-lg">
        <div>
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <img
              className="self-stretch relative rounded-10xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH4AuwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAgMEBQYHAQj/xABGEAABAgQDBQQHBQUECwAAAAABAgMABAURBhIhBxMxQVEiYXGRFzJWgZLR0hQVQqHwI0aDscFScuHxJCYzNTZDRJOissL/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAwUBAgQG/8QAJREBAAICAQQCAQUAAAAAAAAAAAECAxEEBRIhMRNBwRQVMlGx/9oADAMBAAIRAxEAPwDGgDeFhrCjqBfSOJEBxYuQOgjttI7a5vAIvAEtaDJEdsYUaZceWG2klS1aACDMRMzqBIAETzuFpxLIW062tdrlFrfnziGWytCilQIUDYgxrW9bek2bjZcOvkrrZM2g6YlcPYYquIplTFMaQooF1rcXlQjpc6nXuBh3XMF1ygMh6oy7e6uBvGnMwBPC9wI0nPii/ZNo3/SHUoEG0GTfjD2l0t6pz7EnLkBx5VgSDYc+XhEzX8D1ShS5mX1MPsgpBUys6FRsBZQHOFs2Ol4padTJpXARCqdYeTFAqso3vZiRdQj+0LKH5Ew1F0punj3RJFot6lpW1bfxnZwizSRbU246wdhWY9o8O6GiUuPLQ22ha1n8KBcnw/KHJYmJM5Jth1lShoHEFP8AOG43pnujet+TwLuNCQOkBN7npDVChyMKpVbnpGWTpKiQLgEQEqudTa8JoVboRHb68bwCqh2dIbKMKrsG7iGpVrAKJOsLg/qwhok698K7wjTSDKtuiyoLB3zrfuvCRPZgwOmDpRcwmDYQYLtAOEtp5xZMOSKQkzKhqTZJ6Dh+vdFWQ4VKSgWuogCNCkmQxLNtAaJSBp4f5Rz8i/bXULjo/HjLmm8/RxpZI04RW8SyzbbzUwB/tOyrxEPk1Zv7+dklA5UgJSrlmtc/rxhWvyv2qmOBIutsbxHu5eUc+PeO8bXPMinL414p5mv+wt2xphtFLmpkXzOTCgTfTKlKdPMmL5VpGWqUk9JTbYWy8goUDFA2LKLmGpwKAIROLSCe9DZ/rFxmKmyzV2aatwJfLKnQknUi9o811CLzzb2r7j8PL012svw9Rn6JtElqdOI1TvFIcto4jIqxi47V0oZwksJ4B9k3/iCLHNUuWnqhJVBYH2yUJyLH4kqSQR4fKK5tdbUcFzBCbkPMm3QbwfOJ68v9Ty8Mz78RLWa6rMGlOeS7LhSiktLHZvreKji/D6pR8Tckz/org7ZSL7tXyiLw1iV6lqRLzQzyd9T+JHzEaVKuszkolaSl1l1OnS1osbfJw8nd9S8rf5eDm74jcSrmD6SlqWTOut/tXtUk/hTyH6690NMePtJbZkEauhQccP8AZ00H5xap+aYo1PemnDZLabpTe2Y8k/rrGSzE29NzLsy/ZTrisyjfnE3Ei3IzTmt6hPwovys8559QKRaDIJgoJPKOZrRbrw4Qo3hdF1LA66QzSrUQ6lzdRPd+v5wCswbItDMnWHE6oBdhyhoDAKoNtYBMJqPZgySbC3CDKEc9WEb6CDrVCBVqPGDBUmOc4IVQZOsBIUaW+1VFhu1xnzHwGsaKbIaKgm/cOcZ9QnEsz6FrWECxGYm1rxNVyr75CGJV42zZiptRHC/OOXNS17xEL/pnKxcXjXvPvab+zSxd3pkEb0m+fdC9/GHtwpAIBAtwIjPPtczpeZf/AO6r5xP0CpJMmpl9+y0E2K1cRx4mNMmC0Rvbs4fVcWS/Z2620PZGwuSlq0xwbTO5kjuLabHyir7V5qYlcasPyzhbdalkKbVxynOu/wDiIkMEYilGFVFL000yTYhS12zAA8Nf1aKtj2torld3jRCkMILSVg6K7aj/AFEV/HwX/cLXtHiYef5PZFpinrfhrWDsRivU9iYQcrgUEPIIv2uf9Py6wTainNg6oqAHqti/8VEY5hSoP0+vyCmnnW21zLaHQ2ojMkqAN+o1jR9oVeaXQ3pFTgKnkAZb63BbPzjmy9PnDzaTT1vaKL7r5ZMlOt41XB8k9I0hpt6+c3WQTe1+X66RmLQ7aLX4i1jbnGizFebpdKKi6h2YKDu0BQOtjbhw5eUW3UYvetaV+1J1St70rjrHtAY7rAm6j9hZJ3Mqe1Y+su2vlw84q4PdAcWVLUpRJUolSj1J1JgoMdeHFGKkUh38fDXDjikfQ/ugp1OkdvHUgqICRck2t1MSpnBprDySKSRZQ6nX3/KNYkMPYYwrQGZ/EErKvupAJdfb3ylrIvlQnUeQ5QtT6thHFbpklU9hCjcNpdl0tOHvbWknXuvAY5NLu6o98IgxZNoGFnMMVJO6Up6QmQVS7qrXBHFCrcx15j3xViqwgFCrWDg98NgbmFws2gIRfGEVcYVc6xcdm+BTi599+bU+3TpfRS2CkLWvQ5QTwFuJgKUTBkGNfrex6RfkFv4XqMw4+hJIbmFJcbdI4hK0gWPKMfTobHRQ4pPEe6AdNQuOXhDZvpE1RsP1etJWumSDr7bZspzRKATwGYkC/dxgI3lrAicqGDcTU9kvTVCnQ0OK2kb0DxyE2iECTAC1+MHGkStDw3VK9vPuthDu7ISrM8hGp5C51iX9G2KwnN92pI7phv5wFU4ix1B5GDoCU8AB4RKVXC9eo7O/qdJmWGc2XekBSb+IJt74FBw5UK84tunmXC0m1n3Ci/hYGAjLwLi8WGuYHxBQpT7XPSaVyw9Z2WXvUo/vaXA77WivZT3wHb2jtwI5lMTNAwnWcRBxdMlQpps2U66rIgnoDbX3CAh81zxhVteVaFWuUkEeIi1r2aYmaBUW5A2STlTNanzAinFUBYsUYlm8STrb80A020jK0whV0t9elyesRsimcmJ5lilIU5PKVdlLY7QUOB8B1hvIS707NNSzGrjqwhPS5NhfzjZXDSNmOH2wttU3Ovf8sEBb6uZJ5IEBGbaVlGG6G3MLSqbU+FODqQ2Qo+ZHnGP5tIlMTYgn8S1ZVQqKhmAyNNI9RlF/VT/U8/ICMy9m8BxJ1g+cdYIgXvBDxMAxc1SI2nDyxQthsxNIWUvPyzygU6dpwlKde648oxN1dkpNr3jcZeVcqmwpliTbLyksJUtKeJShwKVb3AwEDsCqDjdXqFLUtZZelg6hF9AUqsSBy9b8otNQw/T14MxY03JsuOS7844lWQFSHRdaSk9dbQ9wLgSn0arit0h98oXKKaVLu2ULqKVBSVjl2eEdwnNCppxq2yoqT95upSCL6FtI/MgwGM4Lw8cSV5qmh1TKVIU4taRcpSm3AddRGyUaRXhPAtblmHUPLkVzCkrcRcKOUKTceBF/fEDsewdPyM4zXZ4FhDku401LLbOcpOXtk304cIvDbUo/SsSs1BYRLLmnUuqU4G7IyJvqdBAZK9tEr0xLKZWmVbUQRvWUrQpPuC8vmIX2eYJZxGl6cqKnkSbKggJaUElZAubqPAAEcIXxbScGyVJW7Rp4uzYI3SWpxDwJ53SNQLX1h9s3xDS5WiVCh1d5htuZK+zMLLaHEKSEqTm5ad44wBq5OYfwgwtrCTzbk8t1N0qcEygWtckm+U9LH3c4sVExHUXtmE/WnFMmcZTMFIDQCDkvbTnwiPGz3DNYkHjh6fWhxvRK0TCH2weQVbX33vCNCunYdU8xIVlmgofxCD/WAqdUreI8RUZ5x2WT93yywX3JZooSOgV2iLDQ8IvOCmGcObOpqu2Adfl1TF7AlWlmwPMecRmDEpOybFCgLK3U4Ov/AE4hbFzymNjeHWmxZDzEkly3TdZv5gQElssxHN19FQkKuG31y7SFb7IAXUqKgQsDQ8ONtb90QlD2fsVvDM48wQzOiefSwtQJTkQ4UBPHh2Tr3w52Iy+5ZrdUdOVohpsEjQhAUpR/8h5RZMH1NmUwA3VnQUM7t+ad04JKlKv4wFBwJg6Wq87VpWtNOockrNqQlZSpC7qv3Hh4RdkS8/TNncuxhRsP1BKEp7QSV2zdtSQdCrj/AIxZZCUlPvKZqUsUF2cl2d6kHRYF8qge8G3uEYfIY3qtCfm5RrdTMsJhwpQ+CSg5j6pBB/zgFKnN48RJvGe+9US5SQ6TKhIsRrchNxpzimKUAkEcOUa7graS9U8QS9OqEm2yJk5GXWnFEpXbQEG9wbedoo+1Wks0jGU03LBKWpptM1kAsElRUFAe9JPvgEtnriV4zpDdkm80k6j+zdX9IuO1xTbmJd0sgqTKN2HS6ln5RlVOnnqZUZeflsm+l1Z0ZxdN7Eai/fDmbrE5Uqoufnnc77vrEaCwFgAOkAsuWspHejN+cMlO9tbfID5RJNvBTGfmm4/mflEKo/tHD1gHSFADxhBRXc2v5QQOaotfhaF0uWHKAi0/tAUHhyi/7MMdjDIdptSLgknFZm3m051MKPHs80nujPkGyxDlTYzhQVYWvYjjAblN7WaHTGGJSjSqplCrlwy7e5Q2CT6oVxVrfp3xG0HafJMViqTVQadZZmUt7spYC1qKbjtgGxVY8e6MkSRpC19IDXEbWG5jECcrapOjobcP7RGdxxdtCoJvYdAOohxRMfUKclKvL1dTbTc7NLO5eC8qm1JSL3SOdjGNXgFUBsIGzJGdwiQJ5J+0Pq/K0VejVXCkvW59czJNCmqWCw0+yp+9uNiQSATrx590UW8GvAbG1tFwlQafNJw/Tkh93VKGJbdJWq2hWTbQRWZDF0rL7L5qiOrC5x8voCACFDeLzZultfyigwIC/wCG8VSNN2d12lPLBm5wPobaF8yt4zkB6WvxiXwxjihvYUlaFiFCd3LtJZLb7CnW3UptlIKRdJ4eUZMVG2mkFCldTAa5ifHlEk8LGiYSbDf2hJbWttCkJYQT2rZrEqNyL8r+ccnGtOY2VGiBzPPuoXLFlPrJSVHteFv5xmlyeJgQGq7J8XJkWag1Vpxe4YYb+zpWsdhIKrhN/EaQxwrhGn4oamZ19+cZzPuKC2wnKQVGwsecZ22pKfWF4U3yLWy8OGkBuNHwhhXCL4rU/PLKpZV2nZ1xKUoNvwpHrK42490Zdj/EDeJsSPVBhpTbCW0sMhQ1KEkm57yVE+UV4vN31sPdBc6VcF2gJTB0tKz2LKVKT6ELlXpgJdSvRJFjoTcc7c4ltp9JpNFxMmToiEoZ+zJW6lLhWErKlaDpoBp4RUEuuMvJdYdWhxBulxCylST1BHCOuPOvurdfdccdWbqW4sqUo95OpgHDbv7Ip6nWGpPaV74MhVlCCpFyYDqX17ks5ju1KCinqRcA/mfODXhAi1oOF6cIBqyLvtjqoCHrxISQfWCrQwZNl3va2ohRx9TpUpdrlWbTSAWCrQqF6QzCrjSDJXAOwY7eGwdgbyAc5hHc2kNd5ALtoBzngZoa70xzfEdIBwtdhBN4IT36rcT7oJngF94IGe/DWEQ5HS4TxJgFbqP4VeUFUuE83jHc3hAGuVfOABlvfW8cvpBbwB7wM1oJcwIBRCtYUQbQ3vCiDAHWNBCUHvcRy0BYBs0xpcf6vzXxI+qOq2aY0JNsPzVv7yPnHrCBAeUE7NsaD935r4kfVA9G2NPZ+a+JH1R6vgQHlD0b409n5r4kfOB6N8aez018SPnHq+BAeUPRvjT2fmviR84Ho3xoT/w/NfEj6o9XwR1OdBTe1wRfpAeUk7OcYrSSigzBtpcONkf+0D0b4z5YfmiP7yPqj0fKUF6Xk3WN4wpSslhkOVYSq/b8dR3X5wQ0WoreFpxDEvkKd0wtaQLjS2uljzFr34CA85+jfGV/9wTXxI+qB6NsZ+z818SPqj0WugzYeU4h9tJ3u87KlJK/WuCRqL5rcTbUi2ggyKLUd7LuOVAqUyoEkqUd5pYpIPAacRqecB5yGzfGdtKBMnwUg/8A1Bhs3xn7PzfxI+ceh2sMvSyGvsk6tt1DSULUCUhRAsdE2FtB38+MLytIn5eZ332oK/aZygurt6oAT3jS1z48YDzkNnGM/Z6a+JH1R30c4z9npr4kfOPRKqNVFoKRUVJJzdsOuX1/Fa9rnpwTyiUpkm7Jh1Lr63QpV051qVbzgPMR2dY0P7vTXxI+qOejjGfs9NfEj5x6tgQHlP0cYz9npr4kfVHPRxjP2emviR9UerYEB5T9HGM/Z6a+JH1R0bOcZj93pv4kfVHquBAeVU7OsZD93pv4kfVA9HeMvZ6b+JH1R6qgQH//2Q=="
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-8">
          <h1 className="flex-1 relative tracking-[-0.02em] leading-[20px] font-semibold">
            Headline
          </h1>
          <div className="rounded-[1.76px] bg-limegreen w-[26px] h-[26px] flex flex-col items-center justify-center">
            <FaChevronDown className="text-white text-xl" />
          </div>
          <div className="rounded-[1.76px] bg-darkturquoise w-[26px] h-[26px] flex flex-col items-center justify-center">
            <FaChevronUp className="text-white text-xl" />
          </div>

        </div>
        <div className="flex flex-row items-center justify-center gap-8">
          <p className="flex-1 relative tracking-[-0.02em] leading-[20px] font-light">
          Headline this is our project
          </p>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="rounded-md flex flex-col py-3 px-5 items-center justify-start">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <a className="relative leading-[17px] font-semibold" href="/">
                See more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

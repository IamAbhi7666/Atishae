import { component$, useStore, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <header class="header">
        <div class="container mx-auto fixed top-0 left-0 right-0">
          <div class="text-white ">
            <div class="row">
              <div class="col-12">
                <ul class="flex flex-row my-8">
                  <li class="pr-4 hover:text-blue-500 float-left">
                    <a href="/" target="_self"> 
                      About
                    </a>
                  </li>

                    <li class="px-4 hover:text-blue-500">
                      <a href="/" target="_self">
                        Jobs
                      </a>
                    </li>

                  <li class="px-4 hover:text-blue-500">
                    <a href="/" target="_self">
                      Blog
                    </a>
                  </li>

                  <li class="px-4 hover:text-blue-500">
                    <a href="/" target="_self">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>  
    </header>
  );
});

